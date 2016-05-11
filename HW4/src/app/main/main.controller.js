'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    var resourceObject = TodoListResource;
    resourceObject.getTodos({
        page: 0,
        numResults: 55
      }, function onSuccess(response) {
        self.todos = response;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })

  }

  self.addTodo = function(todo) {
    var resourceObject = TodoAddResource;

    resourceObject.addTodos(
  {name: todo.name, description: todo.description}
      , function onSuccess(response) {
        self.todos.push(todo.name);

        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })
  };

  self.editTodo = function(todo) {
          console.log(todo);

    self.isEditing=true;
    var resourceObject = TodoDetailsResource;
    resourceObject.getTodoDetails(
        {id:todo._id}
      , function onSuccess(response) {
        self.userTodo = response;

        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })

  };

//update has issues regarding { [Error: socket hang up] code: 'ECONNRESET' }
  self.updateTodo = function(todo) {
 var resourceObject = TodoUpdateResource;
  //   resourceObject.updateTodoRequest(
  // {name: todo.name, description: todo.description}
  //     , function onSuccess(response) {
  //       // self.userTodo = todo;
  //       console.log('SUCCESS: ', response)
  //     }, function onError(errorMessage) {
  //       console.log('ERROR: ', errorMessage)
  //     })
  };

  self.cancelUpdate = function() {
    self.isEditing=false;
    self.userTodo=null;
  };

  getAllTodos();
});