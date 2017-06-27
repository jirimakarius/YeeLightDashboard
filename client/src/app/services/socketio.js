export default socketio;

/** @ngInject */
const socketio = angular.module('Services.SocketIO', ['btford.socket-io'])
  .factory('discoverIO', socketFactory => {
    return socketFactory({
      ioSocket: io.connect('http://localhost:5000/discover', {transports: ['websocket']})
    });
  });
