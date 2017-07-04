# import atexit
from flask import Flask
from flask_restful import Api
from flask_socketio import SocketIO
import eventlet
import logging
from logging.handlers import RotatingFileHandler

eventlet.monkey_patch()

app = Flask(__name__, static_url_path='')

app.config.from_envvar('FLASK_CONFIG')

formatter = logging.Formatter(
        "[%(asctime)s] {%(pathname)s:%(lineno)d} %(levelname)s - %(message)s")
handler = RotatingFileHandler(app.config['LOG'],
                              maxBytes=1048576,
                              backupCount=3)
handler.setLevel(logging.WARNING)
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.WARNING)

api = Api(app)
socketio = SocketIO(app, async_mode='eventlet')

from yeelight_dashboard.bulbs import ZeroconfBrowser
zeroconf = ZeroconfBrowser()
zeroconf.start()

import yeelight_dashboard.routes

import yeelight_dashboard.api

import yeelight_dashboard.namespace_io

# atexit.register(zeroconf.stop)