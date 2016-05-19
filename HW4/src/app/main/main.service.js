'use strict';

angular.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	var resourceObject = $resource('/api/addtodo', null, {
		addTodos: {
			method: 'PUT',
		}
	});
	return resourceObject;
})

.factory('TodoListResource', function($resource) {
	var resourceObject = $resource('/api/getTodos', null, {
    	getTodos: {
    		method: 'GET',
    		isArray: true
    	}
    });
   	return resourceObject;
})

.factory('TodoDetailsResource', function($resource) {
	var resourceObject = $resource('/api/getTodoDetails/:id/', {id: '@id'},  {
		getTodoDetails: {
			method: 'GET',
		}
	});
	return resourceObject;
})

.factory('TodoUpdateResource', function($resource) {
	var resourceObject = $resource('/api/updateTodo', null, {
		updateTodoRequest: {
			method: 'POST'
			// isArray: true
		}
	});
	return resourceObject;
})

.factory('YelpResource', function($resource) {
	var resourceObject = $resource('/api/yelp/search', null, {
		getFoodRequest: {
			method: 'GET'
			// isArray: true
		}
	});
	return resourceObject;
})
;