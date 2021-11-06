from flask import Flask, request, jsonify, make_response

from flask import Flask, url_for, send_from_directory, request
import os
import time

from werkzeug.utils import secure_filename

from flask_cors import CORS, cross_origin


import pandas as pd
import requests
import numpy as np

flask_app = Flask(__name__)
cors = CORS(flask_app)
flask_app.config['CORS_HEADERS'] = 'Content-Type'


## это нужно чтобы создавать папку в нужном месте, если ее до этого не было
def create_new_folder(local_dir):
    newpath = local_dir
    if not os.path.exists(newpath):
        os.makedirs(newpath)
    return newpath




## отображение главной страницы по адресу http://<ip>:8000/home
@flask_app.route('/home', methods=['GET'])
@cross_origin()
def home():
    return open('Landing-Page/homepage.html', 'r', encoding='utf-8').read()


## соответствие между признаками
all_breeds = {'пудель': "a poodle", 'ботвеллер': "a rottweiler", "бульдог": "a bulldog", "далматинец": "a dalmatian",
              "такса": 'a dachshund',
              "борзой": 'a borzoi',
              "бассет-хаунд": 'a basset hound',
              "померанский шпиц": 'a Pomeranian dog',
              "йоркширский терьер": 'a yorkshire terrier',
              "немецкая овчарка": 'a german shepherd',
              "лабрадор": 'a labrador',
              "хаски": 'a husky',
              "джек-рассел-терьер": 'a jack russell terrier',
              "кавказская овчарка": 'a caucasian shepherd dog',
              "корги": 'a corgi',
              "французский бульдог": 'a French Bulldog',
              "мопс": 'a pug',
              "золотистый ретривер": 'a golden retriever',
              "ротвейлер": 'a rottweiler',
              "кокер-спаниель": 'a cocker spaniel',
              "немецкий боксер": 'a deutscher boxer',
              "пекинес": 'a pekingese',
              "маркер": 'a sharpey',
              "бультерьер": 'a bull terrier',
              "доберман": 'a doberman',
              "сенбернард": 'a st. bernard',
              "ньюфаундленд": 'a newfoundland',
              "бордер-колли": 'a border collie',
              "шиба-ину": 'a shiba inu',
              "самоед": 'a samoyed',
              "бишон-фризе": 'a bichon frise',
              "той-терьер": 'a toy terrier',
              "кавалер-кинг-чарльз-спаниель": 'a cavalier king charles spaniel',
              }



convert_names_breeds = {
    'a dachshund': "такса",
    'a borzoi': "борзой",
    'a basset hound': "бассет-хаунд",
    'a Pomeranian dog': "померанский шпиц",
    'a yorkshire terrier': "йоркширский терьер",
    'a german shepherd': "немецкая овчарка",
    'a labrador': "лабрадор",
    'a husky': "хаски",
    'a jack russell terrier': "джек-рассел-терьер",
    'a caucasian shepherd dog': "кавказская овчарка",
    'a corgi': "корги",
    'a French Bulldog': "французский бульдог",
    'a pug': "мопс",
    'a poodle': "пудель",
    'a golden retriever': "золотистый ретривер",
    'a rottweiler': "ротвейлер",
    'a cocker spaniel': "кокер-спаниель",
    'a deutscher boxer': "немецкий боксер",
    'a pekingese': "пекинес",
    'a sharpey': "маркер",
    'a bull terrier': "бультерьер",
    'a doberman': "доберман",
    'a st. bernard': "сенбернард",
    'a newfoundland': "ньюфаундленд",
    'a border collie': "бордер-колли",
    'a shiba inu': "шиба-ину",
    'a dalmatian': "далматинец",
    'a samoyed': "самоед",
    'a bichon frise': "бишон-фризе",
    'a toy terrier': "той-терьер",
    'a cavalier king charles spaniel': "кавалер-кинг-чарльз-спаниель",
}

colors = {'Белый': 2, "Тёмный": 1, "Разноцветный": 3}
tails = {'Длинный': 2, "Короткий": 1, "Без хвоста": 1}
back_colors = {2: 'Белый', 1: "Тёмный", 3: "Разноцветный"}
back_tails = {2: 'Длинный', 1: "Короткий"}
owner = {0: 'нет', 1: "да"}


## Теперь нам нужно выводить топ-7 наиболее релевантных результатов на сайте

def metric_color(color, real):
    if (color == real): return 0
    return 1


def metric_tail(tail, real):
    if (tail == real): return 0
    return 1


def metric_breed(breeds, real, breeds_distance, breeds_idx):
    breed = breeds.split(',')[0]
    return breeds_distance[breeds_idx[breed]][breeds_idx[real]]


def metric_dist(cam, real):
    diam = 5
    return np.sqrt((cam[0] - real[0]) ** 2 + (cam[1] - real[1]) ** 2) / diam


## Функция, которая позволяет получить топ-7 наиболее релевантных результатов по запросу с сайта
def find_most_sim_dog(csv_all: str, csv_sample: dict, breeds_distance,
                      breeds_idx, show_also_with_owner):
    weight = [0.5, 0.5, 1, 0.0001]  # tail, color, breed, distance
    data_pd = pd.read_csv(csv_all, index_col=0)
    data = pd.read_csv(csv_all, index_col=0)[
        ["color", "tail", "breed", "x_coord", "y_coord", "is_it_a_dog", "is_the_owner_there"]
    ].to_numpy()

    real = [csv_sample['color'], csv_sample['tail'], csv_sample['breed'], csv_sample['x_coord'],
            csv_sample['y_coord']]
    dist = []
    # print(type(int(show_also_with_owner)))

    for inf in data:
        if (int(show_also_with_owner) == 0 and inf[-1] == 1):
            dist.append(np.inf)
            continue
        if (inf[-2] == 0):
            dist.append(np.inf)
            continue
        metrics = [metric_color(inf[0], real[0]), metric_tail(inf[1], real[1]),
                   metric_breed(inf[2], real[2], breeds_distance, breeds_idx),
                   metric_dist([inf[3], inf[4]], [real[3], real[4]])]
        dist.append(sum([m * w for (m, w) in zip(metrics, weight)]))
    dist = np.argsort(dist)[:7]
    # res = sorted(dist,
    #              key=lambda x: int(data_pd.iloc[x]['date'].split()[0]))
    # return (res[::-1])

    return dist


breeds = ['a dachshund', 'a borzoi', 'a basset hound', 'a Pomeranian dog',
          'a yorkshire terrier', 'a german shepherd',
          'a labrador', 'a husky', 'a jack russell terrier',
          'a caucasian shepherd dog', 'a corgi', 'a French Bulldog',
          'a pug', 'a poodle', 'a golden retriever', 'a rottweiler',
          'a cocker spaniel', 'a deutscher boxer', 'a pekingese',
          'a sharpey', 'a bull terrier', 'a doberman', 'a st. bernard',
          'a newfoundland', 'a border collie', 'a shiba inu', 'a dalmatian',
          'a samoyed', 'a bichon frise', 'a toy terrier',
          'a cavalier king charles spaniel']
breeds_idx = {breeds[i]: i for i in range(len(breeds))}


def fill_cameras_coordinates():
    #### заполнение Пропусков рандомными координатами (круг с радиусом 1.5 градуса)
    moscow_x = 55.7522200
    moscow_y = 37.6155600
    data = pd.read_csv('new_result_breed_1_random_date.csv', index_col=0)
    data['x_coord'] = np.random.randn(len(data)) * 0.5 + moscow_x
    data['y_coord'] = np.random.randn(len(data)) * 0.5 + moscow_y
    data.to_csv("new_result_breed_1_random_date.csv")


## Получение данных формы с главного сайта, их обработка и
#  возвращение списка результатов для показа на сайте
@flask_app.route('/results', methods=['POST'])
@cross_origin()
def results():
    formData = dict(request.values.lists())
    print(formData)

    ## перевод "Предполагаемого места пропажи" (поле в форме) из адреса в координаты (широта, долгота)
    address = "+".join(formData['address'][0].split())
    url = "https://geocode-maps.yandex.ru/1.x/?apikey=d548cb3a-d3ff-48d0-be7b-708bd355dc2b&results=1&format=json&geocode={}+Москва&lang=ru".format(
        address)
    r = requests.get(url)
    coords = list(map(float, r.json()['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point'][
        'pos'].split()))

    data = pd.read_csv("matrix_dist.csv", index_col=0)
    matrix_dist = data.to_numpy()
    data = pd.read_csv("new_result_breed_1_random_date.csv", index_col=0)

    show_also_with_owner = formData['show_also_with_owner'][0]
    print(show_also_with_owner)

    ## превращаем в словарь с форматом, нужным для получения наиболее схожих животных
    ideal_result = {"color": colors[formData['color'][0]], "tail": tails[formData['tail'][0]],
                    "breed": all_breeds[formData['breed'][0]], "x_coord": coords[1], "y_coord": coords[0]}

    res = find_most_sim_dog('new_result_breed_1_random_date.csv', ideal_result, matrix_dist, breeds_idx,
                            show_also_with_owner)

    cols = ['filename',
            'is_animal_there',
            'is_it_a_dog',
            'is_the_owner_there',
            'color',
            'breed',
            'tail',
            'address',
            'cam_id',
            'date']

    res_data = []

    data.reset_index(inplace=True)

    for i, ind in enumerate(res):
        res_data.append({})
        for col in cols:
            if col == 'tail':
                res_data[i][col] = str(back_tails[data.iloc[ind][col]])
            elif col == 'color':
                res_data[i][col] = str(back_colors[data.iloc[ind][col]])
            elif col == 'is_the_owner_there':
                res_data[i][col] = str(owner[int(data.iloc[ind][col])])
            elif col == 'breed':
                res_data[i][col] = str(convert_names_breeds[(data.iloc[ind][col])])



            else:
                res_data[i][col] = str(data.iloc[ind][col])

    ## Возвращаем массив из словарей, которые нужны для отображения результатов поиска на сайте

    return jsonify(res_data)





@flask_app.route("/public/images/<path:path>")
def images(path):
    # generate_img(path)
    print(path)
    fullpath = "./images/" + path
    # resp = make_response(open(fullpath).read())
    # resp.content_type = "image/jpeg"
    return path


flask_app.run(host='localhost', port=8000)

white = ['http://localhost:3000', 'http://localhost:9000', 'http://localhost:5000', 'http://localhost:8080']


@flask_app.after_request
def add_cors_headers(response):
    r = request.referrer[:-1]
    if r in white:
        response.headers.add('Access-Control-Allow-Origin', r)
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Headers', 'Cache-Control')
        response.headers.add('Access-Control-Allow-Headers', 'X-Requested-With')
        response.headers.add('Access-Control-Allow-Headers', 'Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    return response
