/** @ngInject */
const controller = function ($stateParams, $rootScope, torgbFilter, commandIO) {
  const $ctrl = this;
  this.bulb = _.find($rootScope.bulbs, ['ip', $stateParams.ip]);
  this.color = torgbFilter(this.bulb.rgb);
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
};

export const control = {
  template: require('./control.html'),
  controller
};
