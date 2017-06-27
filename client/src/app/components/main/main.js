/** @ngInject */
const controller = function ($rootScope, $state) {
  this.bulbs = $rootScope.bulbs;

  this.control = function (ip) {
    $state.go('control', {ip});
  };
};

export const main = {
  template: require('./main.html'),
  controller
};
