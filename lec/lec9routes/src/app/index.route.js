(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/partials/home.main.html',
        controller: 'HomeController as ctrl',
      });

       .state('store', {
        url: '/',
        templateUrl: 'app/home/partials/store.main.html',
        controller: 'StoreController as ctrl',
      });

        .state('contact', {
        url: '/',
        templateUrl: 'app/home/partials/contact.main.html',
        controller: 'ContactController as ctrl',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
