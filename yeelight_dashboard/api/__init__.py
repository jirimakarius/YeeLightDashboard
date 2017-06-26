from yeelight_dashboard.app import api

from .discover import DiscoverAPI
api.add_resource(DiscoverAPI, '/api/discover')

from .power import PowerAPI
api.add_resource(PowerAPI, '/api/<string:bulb_ip>/power')

