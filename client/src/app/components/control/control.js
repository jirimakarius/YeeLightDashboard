/* eslint-disable max-params */
/** @ngInject */
const controller = function ($stateParams, $rootScope, torgbFilter, commandIO, $mdDialog) {
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
  this.rename = function (ev) {
    const prompt = $mdDialog.prompt()
      .title('Bulb rename')
      .placeholder('Bulb name')
      .ariaLabel('Bulb name')
      .targetEvent(ev)
      .ok('Submit')
      .cancel('Fuck off');
    $mdDialog.show(prompt)
      .then(result => {
        const data = {
          ip: $ctrl.bulb.ip,
          value: result
        };
        commandIO.emit('set_name', data);
      })
      .catch(() => {});
  };
};

export const control = {
  template: require('./control.html'),
  controller
};
