(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATES) {
    $stateProvider
      .state(STATES.KHomeState, {
        url: '/',
        templateUrl: 'app/home/partials/home.main.html',
        controller: 'HomeController as ctrl',
      })

       .state(STATES.KStoreState, {
        url: '/store',
        templateUrl: 'app/store/partials/store.main.html',
        controller: 'StoreController as ctrl',
      })

        .state(STATES.KContactState, {
        url: '/contact',
        templateUrl: 'app/contact/partials/contact.main.html',
        controller: 'ContactController as ctrl',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
