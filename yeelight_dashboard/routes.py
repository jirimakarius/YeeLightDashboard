from flask import send_from_directory

from yeelight_dashboard.app import app


@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.errorhandler(404)
def page_not_found(e):
    return send_from_directory('static', 'index.html')