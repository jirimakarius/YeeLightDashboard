import socket

from zeroconf import Zeroconf, ServiceBrowser, ServiceStateChange, ServiceInfo
from yeelight import discover_bulbs, Bulb


class ZeroconfBrowser:
    def __init__(self):
        self._zeroconf = None
        self._browser = None
        self._info = None
        self.bulbs = {}

    def start(self):
        """Start zeroconf browser"""
        self._zeroconf = Zeroconf()
        self._browser = ServiceBrowser(self._zeroconf, '_miio._udp.local.',
                                       handlers=[self.on_service_state_change])
        # self._info = ServiceInfo("_http._tcp.local.",
        #                          "YeeLightDashboard._http._tcp.local.",
        #                          socket.inet_aton("192.168.23.250"), 3000, 1, 1,
        #                          {}, "yeelight.local.")
        # self._zeroconf.register_service(self._info)

    def on_service_state_change(self, zeroconf=None, service_type=None, name=None, state_change=None):
        bulbs = discover_bulbs()
        ret = self.bulbs
        for bulb in bulbs:
            if bulb['ip'] in ret:
                continue
            ret[bulb['ip']] = Bulb(bulb['ip'], auto_on=True)

        self.bulbs = ret

    # def stop(self):
        # print("Zeroconf Unregistered")
        # self._zeroconf.unregister_service(self._info)
        # self._zeroconf.close()
