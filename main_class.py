import torch
import numpy as np
from torchvision.models import detection
import torchvision
import torch.nn as nn
from PIL import Image
import cv2

from .constants import *


class FindLostAnimal():
    def __init__(self, 
                 model_detection,
                 model_classification_animal,
                 model_classification_dog_breed,
                 model_classification_dog_color,
                 model_classification_dog_tail,
                 indices_animal_detection,
                 indices_cat_dog_classification,
                 converter_dog_breed,
                 converter_dog_color,
                 converter_dog_tail,
                 converter_dog_tail_via_breed,
                 model_superresolution,
        ):

        self.model_detection = model_detection
        self.model_classification_animal = model_classification_animal
        self.model_classification_dog_breed = model_classification_dog_breed
        self.model_classification_dog_color = model_classification_dog_color
        self.model_classification_dog_tail = model_classification_dog_tail
        self.indices_cat_dog_classification = indices_cat_dog_classification
        self.indices_animal_detection  = indices_animal_detection
        self.converter_dog_breed = converter_dog_breed
        self.converter_dog_color = converter_dog_color
        self.converter_dog_tail = converter_dog_tail
        self.converter_dog_tail_via_breed = converter_dog_tail_via_breed
        self.model_superresolution = model_superresolution

        self.transforms = torchvision.transforms.Compose([
            torchvision.transforms.Normalize(
                [0.485, 0.456, 0.406],
                [0.229, 0.224, 0.225],
            ),
            # torchvision.transforms.Resize((80, 80)),
        ])

        self.model_detection.eval()
        self.model_classification_animal.eval()
        self.model_classification_dog_breed.eval()
        # self.model_classification_dog_color.eval()
        self.model_classification_dog_tail.eval()


    def __get_cropped_image(self, picture, coordinates, expand_coeff=2.0):
        '''
            picture: torch.Tensor
            coordinates: "indexed set" of 4 coordinates: [x1, y1, x2, y2]
        '''
        x = coordinates[0]
        y = coordinates[1]
        w = coordinates[2] - coordinates[0]
        h = coordinates[3] - coordinates[1]
        w_expanded = int(w * expand_coeff)
        h_expanded = int(h * expand_coeff)
        x_expanded = int(x - (w_expanded - w) / 2.0)
        y_expanded = int(y - (h_expanded - h) / 2.0)

        return torchvision.transforms.functional.crop(
            picture, 
            int(y_expanded), 
            int(x_expanded), 
            int(h_expanded), 
            int(w_expanded),
        )        


    def __get_detection_predictions(self, picture):
        '''
            returns boxes and labels
        '''
        pred = self.model_detection(picture)
        return pred[0]["boxes"], pred[0]["labels"]
    
    def __get_classification_animal_predictions(self, cropped_picture):
        '''
            determines class of an animal
            returns index of the most probable class
        '''
        pred = self.model_classification_animal(cropped_picture)
        label = pred.argmax(axis=1)[0].item()
        return label


    def __convert_features(self, features):
        '''
            convert features to readable format
            return list of features
        '''
        result = []
        for data in features:
            result.append(
                [
                 [self.converter_dog_breed[str(breed)] for breed in data[0]],
                 self.converter_dog_color[data[1]], 
                 self.converter_dog_tail[data[2]], 
                ]
            )
        return result

    def __get_dog_features(self, dog_image, k=3):
        '''
            expect real image! not normalized
            return dog of features in list:
            list[0]: top 3 breeds
            list[1]: dog color
            list[2]: dog tail
        '''
        normalized_picture = self.transforms(dog_image)

        arr = self.model_classification_dog_breed(normalized_picture)[0].detach().numpy()
        ind = arr.argsort()[-k:][::-1]

        return [
                ind,
                self.model_classification_dog_color(dog_image), 
                self.model_classification_dog_tail(normalized_picture).argmax(axis=1)[0].item(), 
        ]

    def __get_tail(self, breeds):
        '''
            get tail length via breed
        '''
        res = {"short": 0, "long": 0}
        for breed in breeds:
            res[self.converter_dog_tail_via_breed[breed]] += 1
        return "short" if res["short"] > res["long"] else "long"

    
    def __save_features(self, features, saved_files, filename):
        '''
            strange funtion for saving features in csv file named "table.csv"
            returns: None
        '''
        n = len(saved_files)
        keys = [
            "src_file",              
            "croppedFileName", 
            "isSomeoneHere", 
            "color", 
            "tail", 
            "top3Breed", 
            "cam_adress", 
            "time_photographed",
        ]
        
        dictionary = {}
        
        for key in keys:
            dictionary[key] = [None] * (n + 1)

        dictionary["isSomeoneHere"][n] = 0

        dictionary["src_file"] = [filename] * (n + 1)

        for i in range(n):
            dictionary["croppedFileName"][i] = saved_files[i]
            dictionary["isSomeoneHere"][i] = 1
            dictionary["color"][i] = features[i][1]
            dictionary["tail"][i] = self.__get_tail(features[i][0]) # TODO
            dictionary["top3Breed"][i] = features[i][0]
            dictionary["cam_adress"][i] = "улица Пушкина, д. Колотушкина" # TODO
            dictionary["time_photographed"][i] = "23:59" # TODO
        table = pd.DataFrame(dictionary)
        table.to_csv("table.csv")
        
    def get_features(self, filename):

        # read the image
        image = Image.open(filename)

        # if it's a png file
        if filename[-3:] == "png":
            picture_numpy = np.asarray(image)[:, :, :3]
        else:
            picture_numpy = np.asarray(image)
            
        # array of features for dog
        features = []

        # array of names of saved cropped pictured
        saved_files = []

        # convert picture in tensor
        picture = torch.from_numpy(picture_numpy).\
        to(dtype=torch.float32).permute(2, 0, 1) / 256
        picture.unsqueeze_(0)

        # get predictions of detector
        boxes, labels = self.__get_detection_predictions(picture)

        # variable cnt shows number of cropped dog
        cnt = 0

        for box, label in zip(boxes, labels):

            # if it is an animal than we should check it
            if label in self.indices_animal_detection:
                cropped_image = self.__get_cropped_image(picture, box, 2.0)

                # don't forget to transform cropped_image due to 
                # classificators expect othed std and mean
                pred = self.__get_classification_animal_predictions(
                    self.transforms(cropped_image)
                )

                # if it is a dog
                if pred in self.indices_cat_dog_classification:
                    # self.show_picture(self.__get_cropped_image(picture, box, 1.0))

                    features.append(self.__get_dog_features(cropped_image))
                    cropped_image_numpy = (
                        self.__get_cropped_image(picture, box, 1.0)[0].\
                        permute(1, 2, 0).\
                        detach().\
                        numpy() * 256
                    ).astype(dtype=np.uint8)

                    # add better quality for picture
                    result_image = self.model_superresolution.upsample(cropped_image_numpy)
                    image = Image.fromarray(result_image)

                    # and save cropped image
                    name_of_saved_picture = "test" + str(cnt) + ".jpg"
                    saved_files.append(name_of_saved_picture)
                    image.save(name_of_saved_picture)
                    cnt += 1

        # after all iterations we have to convert features to readable format
        result_features = self.__convert_features(features)

        # save features as csv file
        self.__save_features(result_features, saved_files, filename)
        return result_features

'''
example of usage:

find_lost_animal = FindLostAnimal(
    model_detection,
    model_classification_cat_dog, 
    model_classification_dog_breed,
    ColorDetector(colors_vec),
    Mock(2),
    indices_animal_detection,
    [1],
    breeds_converter,
    colors_names,
    {0: "enormous"},
    tails_converter,
    superresolution,
)
'''
