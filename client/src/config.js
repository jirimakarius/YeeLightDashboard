/** @ngInject */
export default function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      // template: '<app></app>'
      component: 'app'
    });
}
