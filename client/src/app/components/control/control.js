/** @ngInject */
const controller = function ($stateParams, $rootScope, torgbFilter, commandIO) {
  const $ctrl = this;
  $rootScope.loaded.promise.then(() => {
    $ctrl.bulb = _.find($rootScope.bulbs, ['ip', $stateParams.ip]);
    $ctrl.color = torgbFilter($ctrl.bulb.rgb);
  });

  this.onSelect = function (color) {
    const data = {
      ip: $ctrl.bulb.ip,
      red: color.rgba.red,
      green: color.rgba.green,
      blue: color.rgba.blue
    };
    commandIO.emit('rgb', data);
  };
  this.setBrightness = function () {
    const data = {
      ip: $ctrl.bulb.ip,
      value: $ctrl.bulb.bright
    };
    commandIO.emit('brightness', data);
  };
  this.power = function () {
    commandIO.emit('toggle', {ip: $ctrl.bulb.ip});
  };
  this.setTemperature = function () {
    const data = {
      ip: $ctrl.bulb.ip,
      value: $ctrl.bulb.ct
    };
    commandIO.emit('temperature', data);
  };
  this.white = function () {
    const data = {
      ip: $ctrl.bulb.ip,
      red: 255,
      green: 255,
      blue: 255
    };
    commandIO.emit('rgb', data);
  };
};

export const control = {
  template: require('./control.html'),
  controller
};
