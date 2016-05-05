(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainResource) {
    var self = this;
    self.greeting = "Hello World"

    var resourceObject = MainResource;

    self.makeRequest = function() {
    	// first argument is the URL params
    	// second argument is the body params


    	// using futures
    	resourceObject.getPeople({
    		page: 0,
    		numResults: 55
    	}, function onSuccess(response) {
    		self.people = response;
    		console.log('SUCCESS: ', response)
    	}, function onError(errorMessage) {
    		console.log('ERROR: ', errorMessage)
    	})

    	// Using promise
    	// resourceObject.getPeople({
    	// 	page: 0,
    	// 	numResults: 55
    	// })
    	// .$promise
    	// .then(function onSuccess(response) {
    	// 	self.people = response;
    	// 	console.log('SUCCESS: ', response)
    	// }, function onError(errorMessage) {
    	// 	console.log('ERROR: ', errorMessage)
    	// });

    	//Body Parameters
    	// , {
    	// 	bodyParam1: 'val1',
    	// 	bodyParam2: 'val2'
    	// });
    };

  }

})();
