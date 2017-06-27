from flask_socketio import Namespace, emit
from yeelight import Bulb, BulbException

from yeelight_dashboard.app import zeroconf


class CommandIO(Namespace):
    def on_rgb(self, message):
        try:
            zeroconf.bulbs[message['ip']].set_rgb(message['red'], message['green'], message['blue'])
        except BulbException:
            pass

    def on_toggle(self, message):
        try:
            zeroconf.bulbs[message['ip']].toggle()
        except BulbException:
            pass

    def on_brightness(self, message):
        try:
            zeroconf.bulbs[message['ip']].set_brightness(message['value'])
        except BulbException:
            pass
