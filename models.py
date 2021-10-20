import torch
import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
from torchvision.models import detection
import torchvision
import torch.nn as nn
from tqdm.notebook import tqdm
from PIL import Image


class ColorDetector():
    def __init__(self, colors, THRESHOLD=1./8):
        self.THRESHOLD = THRESHOLD
        self.colors = np.array(colors)
    
    def __call__(self, image):
        image = image[0]
        h = int(self.THRESHOLD * image.shape[1])
        w = int(self.THRESHOLD * image.shape[2])
        x1 = image.shape[2] // 2 - w // 2
        y1 = image.shape[1] // 2 - h // 2
        x2 = image.shape[2] // 2 + w // 2
        y2 = image.shape[1] // 2 + h // 2
        cropped_image = get_cropped_image(image, [x1, y1, x2, y2], expand_coeff=1.0)
        plt.imshow(cropped_image.permute(1, 2, 0).detach().numpy())
        plt.show()
        color = [0] * cropped_image.shape[0]
        for channel in range(cropped_image.shape[0]):
            color[channel] = cropped_image[channel].mean().item() * 256
        color = np.array(color)
        return np.argmin(np.sum((self.colors - color) ** 2.0, axis=1))



# MODELS
superresolution = cv2.dnn_superres.DnnSuperResImpl_create()
path = "FSRCNN_x4.pb"
superresolution.readModel(path)
superresolution.setModel("fsrcnn",4)



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
    torch.load('FILENAME', map_location=torch.device('cpu'))
    )

model_classification_dog_breed = nn.Sequential(model_classification_dog_breed_fp, 
                                               model_classification_dog_breed_sp)




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


model_classification_cat_dog_sp.load_state_dict(
    torch.load('FILENAME', map_location=torch.device('cpu'))
    )
model_classification_cat_dog = nn.Sequential(model_classification_cat_dog_fp, 
                                             model_classification_cat_dog_sp)



model_detection = torchvision.models.detection.fasterrcnn_mobilenet_v3_large_fpn(pretrained = True)

