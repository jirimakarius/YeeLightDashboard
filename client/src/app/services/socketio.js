export default socketio;

/** @ngInject */
const socketio = angular.module('Services.SocketIO', ['btford.socket-io'])
  .factory('discoverIO', (socketFactory, $location) => {
    return socketFactory({
      ioSocket: io.connect($location.protocol() + '://' + $location.host() + ':' + 5000 + '/discover', {transports: ['websocket', 'polling']})
    });
  })
  .factory('commandIO', (socketFactory, $location) => {
    return socketFactory({
      ioSocket: io.connect($location.protocol() + '://' + $location.host() + ':' + 5000 + '/command', {transports: ['websocket', 'polling']})
    });
  });
