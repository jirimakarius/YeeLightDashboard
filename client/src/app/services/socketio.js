export default angular.module('services.socketIO', ['btford.socket-io'])
  /** @ngInject */
  .factory('discoverIO', (socketFactory, $location) => {
    return socketFactory({
      ioSocket: io.connect($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/discover', {transports: ['websocket', 'polling']})
    });
  })
  /** @ngInject */
  .factory('commandIO', (socketFactory, $location) => {
    return socketFactory({
      ioSocket: io.connect($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/command', {transports: ['websocket', 'polling']})
    });
  });
