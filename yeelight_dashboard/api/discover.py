from flask_restful import Resource
from yeelight import discover_bulbs


class DiscoverAPI(Resource):
    def get(self):
        return discover_bulbs()