import torch
import numpy as np
from torchvision.models import detection
import torchvision
import torch.nn as nn
from colormath.color_objects import sRGBColor, LabColor
from colormath.color_conversions import convert_color
from colormath.color_diff import delta_e_cie2000
import cv2
import os

from .constants import *

class Mock():
    def __init__(self, out_size):
        self.out_size = out_size

    def eval(self):
        pass
    
    def __call__(self, x):
        return torch.ones((x.size()[0], self.out_size))


class ColorDetector():
    def __init__(self, list_of_colors, THRESHOLD=1./8):
        self.THRESHOLD = THRESHOLD
        self.list_of_colors = np.array(list_of_colors)


    def __get_cropped_image(self, picture, coordinates):
        '''
            picture: torch.Tensor
            coordinates: "indexed set" of 4 coordinates: [x1, y1, x2, y2]
        '''
        x = coordinates[0]
        y = coordinates[1]
        w = coordinates[2] - coordinates[0]
        h = coordinates[3] - coordinates[1]

        return torchvision.transforms.functional.crop(
            picture, 
            int(y), 
            int(x), 
            int(h), 
            int(w),
        )
    
    def __call__(self, image):
        image = image[0]
        h = int(self.THRESHOLD * image.shape[1])
        w = int(self.THRESHOLD * image.shape[2])
        x1 = image.shape[2] // 2 - w // 2
        y1 = image.shape[1] // 2 - h // 2
        x2 = image.shape[2] // 2 + w // 2
        y2 = image.shape[1] // 2 + h // 2
        cropped_image = self.__get_cropped_image(image, [x1, y1, x2, y2])
        color = [0] * cropped_image.shape[0]
        for channel in range(cropped_image.shape[0]):
            color[channel] = cropped_image[channel].mean().item() * 256
        color = np.array(color)

        list_of_colors_colormath = [convert_color(sRGBColor(
            col[0] / 255, 
            col[1] / 255, 
            col[2] / 255), LabColor) for col in self.list_of_colors]
        color_colormath = convert_color(sRGBColor(
            color[0] / 255, 
            color[1] / 255, 
            color[2] / 255), LabColor)
        distances = [delta_e_cie2000(col, color_colormath) for col in list_of_colors_colormath]
        return np.argmin(distances)

expl_path = '/'.join(os.path.abspath('app.py').split('/')[:-2])

# MODELS
# superresolution model
superresolution = cv2.dnn_superres.DnnSuperResImpl_create()
path = expl_path + '/leaders2021/FSRCNN_x4.pb'

superresolution.readModel(path)
superresolution.setModel("fsrcnn",4)


# color detector
color_detector = ColorDetector(colors_vec)

f1 = expl_path + '/leaders2021/model_classification_dog_breeds.pt'

# classification dog breed
n_inputs = 1000
model_classification_dog_breed_fp = torchvision.\
models.resnet50(pretrained = True)
n_classes_classfication_dog_breed = 61
model_classification_dog_breed_sp = nn.Sequential(
                      nn.Linear(n_inputs, 512),
                      nn.Tanh(),
                      nn.Dropout(0.3),
                      nn.Linear(512, 256),
                      nn.ReLU(),
                      nn.Linear(256, n_classes_classfication_dog_breed)
                      )
model_classification_dog_breed_sp.load_state_dict(
    torch.load(f1, map_location=torch.device('cpu'))
    )

model_classification_dog_breed = nn.Sequential(model_classification_dog_breed_fp, 
                                               model_classification_dog_breed_sp)



# classification cat or dog
model_classification_cat_dog_fp = torchvision.\
models.resnet101(pretrained = True)

n_classes_classfication_cat_dog = 2
torch.manual_seed(42)
model_classification_cat_dog_sp = nn.Sequential(
    nn.Linear(n_inputs, 256),
    nn.Dropout(0.4),
    nn.ReLU(),
    nn.Linear(256, 64),
    nn.Sigmoid(),
    nn.Linear(64, n_classes_classfication_cat_dog)
)

model_classification_dog_breed = torchvision.models.resnet101(pretrained=True)
for param in model_classification_dog_breed.parameters():
    param.requires_grad=False
model_classification_dog_breed.fc = nn.Sequential(
                      nn.Linear(2048, 1024),
                      nn.Dropout(0.2),
                      nn.Tanh(),
                      nn.Linear(1024, 512),
                      nn.Dropout(0.2),
                      nn.Tanh(),
                      nn.Linear(512, 256),
                      nn.ReLU(),
                      nn.Linear(256, 44)
                      )
model_classification_dog_breed.load_state_dict(
    torch.load(expl_path + '/leaders2021/new_breed_classification.pt', map_location=torch.device('cpu'))
)


f2 = os.path.abspath(expl_path + '/leaders2021/new_model_cat_dogs_bq.pt')

model_classification_cat_dog_sp.load_state_dict(
    torch.load(f2, map_location=torch.device('cpu'))
    )
model_classification_cat_dog = nn.Sequential(model_classification_cat_dog_fp, 
                                             model_classification_cat_dog_sp)

# model detection
model_detection = torchvision.models.detection.fasterrcnn_mobilenet_v3_large_fpn(pretrained = True)
