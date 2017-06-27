export default socketio;

/** @ngInject */
const socketio = angular.module('Services.SocketIO', ['btford.socket-io'])
  .factory('discoverIO', socketFactory => {
    return socketFactory({
      ioSocket: io.connect('http://192.168.23.250:5000/discover', {transports: ['websocket', 'polling']})
    });
  })
  .factory('commandIO', socketFactory => {
    return socketFactory({
      ioSocket: io.connect('http://192.168.23.250:5000/command', {transports: ['websocket', 'polling']})
    });
  });
