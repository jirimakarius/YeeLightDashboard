/** @ngInject */
export default function ($stateProvider, $locationProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      template: '<app flex layout="column"></app>'
      // component: 'app'
    })
    .state({
      name: 'control',
      url: '/:ip',
      template: '<control></control>'
    });
}
