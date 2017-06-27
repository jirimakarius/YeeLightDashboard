import eventlet
from flask_socketio import Namespace, emit

from yeelight_dashboard.app import zeroconf, socketio


class DiscoverIO(Namespace):
    def on_connect(self):
        pass


def bg_emit():
    ret = []
    for ip, bulb in zeroconf.bulbs.items():
        i = bulb.get_properties()
        i['ip'] = ip
        ret.append(i)
    print(ret)
    socketio.emit('message', ret, broadcast=True, namespace='/discover')


def listen():
    while True:
        bg_emit()
        eventlet.sleep(1)

eventlet.spawn(listen)
