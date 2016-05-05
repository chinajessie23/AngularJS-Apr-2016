(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainResource) {
    var self = this;
    self.greeting="Hello World";

    var resourceObject = MainResource;
    //first query param is url, second is body (only for POST/PUT)
    resourceObject.getPeople({
    	 page:0, 
    	 numResults:55
    	})
    .$promise
    .then(function onSuccess(response){
    	self.people = response;
    	console.log('SUCCESS: ', response)
    },function onError(errorMessage){
    	console.log('ERROR: ', errorMessage)
    });
    	// ,{
    	// 	bodyParam1:'val1',
    	// 	bodayParam2:'val2'
    	// }	
    }
})();
