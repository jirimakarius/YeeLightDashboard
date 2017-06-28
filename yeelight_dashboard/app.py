import atexit
from flask import Flask
from flask_restful import Api
from flask_socketio import SocketIO
import eventlet
from yeelight_dashboard.bulbs import ZeroconfBrowser

eventlet.monkey_patch()

app = Flask(__name__)
api = Api(app)
socketio = SocketIO(app, async_mode='eventlet')

zeroconf = ZeroconfBrowser()
zeroconf.start()

import yeelight_dashboard.api

import yeelight_dashboard.namespace_io

atexit.register(zeroconf.stop)
