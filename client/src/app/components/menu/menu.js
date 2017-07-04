export default menu;

/** @ngInject */
function menu($scope, $mdSidenav, commandIO) {
  $scope.toggleSidenav = function () {
    $mdSidenav('left').toggle();
  };
  $scope.refresh = function () {
    commandIO.emit('refresh');
  };
}
