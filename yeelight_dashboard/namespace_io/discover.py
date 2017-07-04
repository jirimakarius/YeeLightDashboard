import eventlet
from eventlet.semaphore import Semaphore
from flask_socketio import Namespace, emit
from yeelight import BulbException, Bulb

from yeelight_dashboard.app import zeroconf, socketio


class DiscoverIO(Namespace):
    def on_connect(self):
        pass


def bg_emit():
    ret = []
    lock.acquire()
    for ip, bulb in zeroconf.bulbs.items():
        try:
            i = bulb.get_properties()
            i['bright'] = int(i['bright'])
            i['ct'] = int(i['ct']) if i['ct'] else None
            i['ip'] = ip
            ret.append(i)
        except BulbException:
            try:
                zeroconf.bulbs[ip] = Bulb(ip, auto_on=True)
                i = zeroconf.bulbs[ip].get_properties()
                i['bright'] = int(i['bright'])
                i['ct'] = int(i['ct']) if i['ct'] else None
                i['ip'] = ip
                ret.append(i)
            except BulbException:
                pass
    lock.release()
    # print(ret)
    socketio.emit('message', ret, broadcast=True, namespace='/discover')


def listen():
    while True:
        bg_emit()
        eventlet.sleep(2)

lock = Semaphore()
eventlet.spawn_n(listen)
