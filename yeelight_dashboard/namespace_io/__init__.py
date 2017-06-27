from yeelight_dashboard.app import socketio

from .discover import DiscoverIO
from .command import CommandIO

socketio.on_namespace(DiscoverIO('/discover'))
socketio.on_namespace(CommandIO('/command'))
