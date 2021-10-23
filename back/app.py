from flask import Flask, request, jsonify, make_response
# from flask_restplus import Api, Resource, fields
# from sklearn.externals import joblib
from flask import Flask, url_for, send_from_directory, request
import os
import time


from flask import json
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage

from flask_cors import CORS, cross_origin

from leaders2021.models import *
from leaders2021.main_class import *
import pandas as pd

flask_app = Flask(__name__)
cors = CORS(flask_app)
flask_app.config['CORS_HEADERS'] = 'Content-Type'

# PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
UPLOAD_FOLDER = '/Users/kirillbogomolov/Desktop/Coding/react-2/public/images'
flask_app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# app = Api(app=flask_app,
#           version="1.0",
#           title="ML React App",
#           description="Predict results using a trained model")
#
# name_space = app.namespace('prediction', description='Prediction APIs')

# model = app.model('Prediction params',
#                   {'textField1': fields.String(required=True,
#                                                description="Text Field 1",
#                                                help="Text Field 1 cannot be blank"),
#                    'textField2': fields.String(required=True,
#                                                description="Text Field 2",
#                                                help="Text Field 2 cannot be blank"),
#                    'select1': fields.Integer(required=True,
#                                              description="Select 1",
#                                              help="Select 1 cannot be blank"),
#                    'select2': fields.Integer(required=True,
#                                              description="Select 2",
#                                              help="Select 2 cannot be blank"),
#                    'select3': fields.Integer(required=True,
#                                              description="Select 3",
#                                              help="Select 3 cannot be blank")})


# classifier = joblib.load('classifier.joblib')


from flask_restful import Resource, Api, reqparse
import werkzeug


# @flask_app.route('/upload', methods=['POST'])
# @cross_origin()
# def post():
#     parse = reqparse.RequestParser()
#     parse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
#     args = parse.parse_args()
#     image_file = args['file']
#     image_file.save("your_file_name.jpg")"
#     return 'true'

def create_new_folder(local_dir):
    newpath = local_dir
    if not os.path.exists(newpath):
        os.makedirs(newpath)
    return newpath


class Mock():
    def __init__(self, out_size):
        self.out_size = out_size

    def eval(self):
        pass

    def __call__(self, x):
        return torch.ones((x.size()[0], self.out_size))


@flask_app.route('/upload', methods=['POST'])
@cross_origin()
def api_root():
    # flask_app.logger.info(PROJECT_HOME)
    if request.method == 'POST':
        res = []

        for i in range(len(request.files)):
            flask_app.logger.info(flask_app.config['UPLOAD_FOLDER'])
            img = request.files['image'+str(i)]
            img_name = secure_filename(img.filename)
            create_new_folder(flask_app.config['UPLOAD_FOLDER'])
            saved_path = os.path.join(flask_app.config['UPLOAD_FOLDER'], img_name)
            flask_app.logger.info("saving {}".format(saved_path))
            img.save(saved_path)

            ###### now NN

            find_lost_animal = FindLostAnimal(
                model_detection,
                model_classification_cat_dog,
                model_classification_dog_breed,
                color_detector,
                Mock(2),
                indices_animal_detection,
                [1],
                breeds_converter,
                colors_names,
                {0: "enormous"},
                tails_converter,
                superresolution,
            )

            find_lost_animal.get_features(saved_path, i)

            # print(res)
            # print(find_lost_animal)
            # df = pd.read_csv("table.csv")
            # print(df)
            # row = '123'
            # for index, row in df.iterrows():
            #     print(row)

            df = pd.read_csv('table.csv', encoding='UTF-8')
            data = []

            for index, row in df.iterrows():
                body = {}
                if index != len(list(df.iterrows()))-1:
                    for col in df.columns:
                        # d = {}
                        # body[index] = 123
                        # print(row[col])
                        if col=='top3Breed':
                            body[col] = (row[col].split(','))
                        else:
                            body[col] = (row[col])

                    data.append(body)

            res.append(data[0])

        # response = flask_app.response_class(
        #     response=json.dumps({"data": list(data)}),
        #     status=200,
        #     mimetype='application/json'
        # )
        # data = ['123',123,123]
        # print(data)

        ## Чтобы фото успело на сервере загрузиться
        time.sleep(3)

        return jsonify(res)

    else:
        return "Where is the image?"


# @flask_app.route('/upload', methods=['POST'])
# @cross_origin()
# def update_text():
#     # file = request.files['file']
#     # response = jsonify({'some': 'data'})
#     # files = request.files.to_dict(flat=False)  ## files is a list containing two images.
#     # for i, file in enumerate(files):
#     #     file.save(f'image-{i}.jpg')
#     # print(file)
#     return response

@flask_app.route('/files', methods=['GET'])
@cross_origin()
def get_files():
    # file = request.files['file']
    file_names = os.listdir(UPLOAD_FOLDER)
    response = jsonify({'data': file_names})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@flask_app.route("/public/images/<path:path>")
def images(path):
    # generate_img(path)
    print(path)
    fullpath = "./images/" + path
    # resp = make_response(open(fullpath).read())
    # resp.content_type = "image/jpeg"
    return path


flask_app.run(host='localhost', port=8080)

white = ['http://localhost:3000', 'http://localhost:9000', 'http://localhost:5000']


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

# @name_space.route("/")
# class MainClass(Resource):
#
#     def options(self):
#         response = make_response()
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add('Access-Control-Allow-Headers', "*")
#         response.headers.add('Access-Control-Allow-Methods', "*")
#         return response
#
#     @app.expect(model)
#     def post(self):
#         try:
#             formData = request.json
#             data = [val for val in formData.values()]
#             # prediction = classifier.predict(data)
#             response = jsonify({
#                 "statusCode": 200,
#                 "status": "Prediction made",
#                 "result": "Prediction: " + str(data)
#             })
#             response.headers.add('Access-Control-Allow-Origin', '*')
#             return response
#         except Exception as error:
#             return jsonify({
#                 "statusCode": 500,
#                 "status": "Could not make prediction",
#                 "error": str(error)
#             })
