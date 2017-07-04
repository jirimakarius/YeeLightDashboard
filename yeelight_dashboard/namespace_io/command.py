from flask_socketio import Namespace, emit
from yeelight import Bulb, BulbException

from yeelight_dashboard.app import zeroconf
from yeelight_dashboard.namespace_io.discover import lock


class CommandIO(Namespace):
    def on_rgb(self, message):
        lock.acquire()
        try:
            zeroconf.bulbs[message['ip']].set_rgb(message['red'], message['green'], message['blue'])
        except BulbException:
            try:
                zeroconf.bulbs[message['ip']] = Bulb(message['ip'], auto_on=True)
                zeroconf.bulbs[message['ip']].set_rgb(message['red'], message['green'], message['blue'])
            except BulbException:
                pass
        lock.release()

    def on_toggle(self, message):
        lock.acquire()
        try:
            zeroconf.bulbs[message['ip']].toggle()
        except BulbException:
            try:
                zeroconf.bulbs[message['ip']] = Bulb(message['ip'], auto_on=True)
                zeroconf.bulbs[message['ip']].toggle()
            except BulbException:
                pass
        lock.release()

    def on_brightness(self, message):
        lock.acquire()
        try:
            zeroconf.bulbs[message['ip']].set_brightness(message['value'])
        except BulbException:
            try:
                zeroconf.bulbs[message['ip']] = Bulb(message['ip'], auto_on=True)
                zeroconf.bulbs[message['ip']].set_brightness(message['value'])
            except BulbException:
                pass
        lock.release()

    def on_temperature(self, message):
        lock.acquire()
        try:
            zeroconf.bulbs[message['ip']].set_color_temp(message['value'])
        except BulbException:
            try:
                zeroconf.bulbs[message['ip']] = Bulb(message['ip'], auto_on=True)
                zeroconf.bulbs[message['ip']].set_color_temp(message['value'])
            except BulbException:
                pass
        lock.release()

    def on_refresh(self):
        zeroconf.on_service_state_change()

    def on_set_name(self, message):
        print(message)
        lock.acquire()
        try:
            zeroconf.bulbs[message['ip']].set_name(message['value'])
        except BulbException:
            try:
                zeroconf.bulbs[message['ip']] = Bulb(message['ip'], auto_on=True)
                zeroconf.bulbs[message['ip']].set_name(message['value'])
            except BulbException:
                pass
        lock.release()
