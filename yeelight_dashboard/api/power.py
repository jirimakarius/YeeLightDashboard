from flask_restful import Resource
from yeelight import Bulb, BulbException


class PowerAPI(Resource):
    def get(self, bulb_ip):
        try:
            bulb = Bulb(bulb_ip)

            if bulb.get_properties()["power"] == "off":
                bulb.turn_on()
            else:
                bulb.turn_off()

            return "",200
        except BulbException:
            return "",400
