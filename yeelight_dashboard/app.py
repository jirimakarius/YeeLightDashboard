from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

import yeelight_dashboard.api


@app.route('/')
def hello():
    return 'MI-PYT je nejlepší předmět na FITu!'
