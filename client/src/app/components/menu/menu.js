export const menu = function ($scope, $mdSidenav) {
  $scope.toggleSidenav = function () {
    $mdSidenav('left').toggle();
  };
};
