export default function ($rootScope, discoverIO, $q) {
  $rootScope.bulbs = [];
  $rootScope.loaded = $q.defer();
  discoverIO.on('message', message => {
    $rootScope.loaded.resolve();
    const delet = _.differenceWith($rootScope.bulbs, message, (value, other) => {
      return value.ip === other.ip;
    });
    _.pullAll($rootScope.bulbs, delet);
    _.forEach(message, value => {
      let found = false;
      _.forEach($rootScope.bulbs, bulb => {
        if (value.ip === bulb.ip) {
          _.merge(bulb, value);
          found = true;
        }
      });
      if (!found) {
        $rootScope.bulbs.push(value);
      }
    });
  });
}
