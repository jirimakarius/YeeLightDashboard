from zeroconf import Zeroconf, ServiceBrowser, ServiceStateChange
from yeelight import discover_bulbs, Bulb


class ZeroconfBrowser:
    """
    Class for zeroconf multicast DNS service discovery of OctoPrint instances in local network
    """

    def __init__(self):
        self._zeroconf = None
        self._browser = None
        self.bulbs = {}

    def start(self):
        """Start zeroconf browser"""
        self._zeroconf = Zeroconf()
        self._browser = ServiceBrowser(self._zeroconf, '_miio._udp.local.',
                                       handlers=[self.on_service_state_change])

    def on_service_state_change(self, zeroconf, service_type, name, state_change):
        bulbs = discover_bulbs()
        ret = {}
        for bulb in bulbs:
            ret[bulb['ip']] = (Bulb(bulb['ip']))

        self.bulbs = ret
