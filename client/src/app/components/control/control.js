/** @ngInject */
const controller = function ($stateParams) {
  this.param = $stateParams;
  console.dir($stateParams);
};

export const control = {
  template: require('./control.html'),
  controller
};
