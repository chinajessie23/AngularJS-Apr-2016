(function() {
  'use strict';

  angular
    .module('template')
    .factory('MainResource', function($resource){
    	//:userId is a placeholder that I do not know value now.

    	var resourceObject = $resource('assets/json/sampleData.json',null,
    		{
    			getPeople:{
    				method:GET,
    				isArray:true
    			}
    		});
    	
    	return resourceObject;
});


//LEC example
// var resourceObject = $resource('api/users/:userId',
    	// 	//customized url param
    	// 	{userId:'@userId'},
    	// 	//custom actions to config a request (instructions from backend)
    	// 	{
    	// 		signup: {
	    // 			method:'PUT',
	    // 			headers:{
	    // 				content:'...'
	    // 			},
	    // 			//specify if response is array.
	    // 			isArray:true
    	// 		},
    	// 		login:{
    	// 			method:'POST',
    	// 			headers:{

    	// 			}
    	// 		}
   		//  	});