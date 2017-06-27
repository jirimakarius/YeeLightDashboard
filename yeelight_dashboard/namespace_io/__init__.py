from yeelight_dashboard.app import socketio

from .discover import DiscoverIO

socketio.on_namespace(DiscoverIO('/discover'))
