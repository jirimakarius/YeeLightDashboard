/** @ngInject */
const controller = function ($mdSidenav) {
  this.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };
};

export const toolbar = {
  template: require('./toolbar.html'),
  controller
};
