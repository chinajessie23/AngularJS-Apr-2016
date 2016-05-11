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
        self.todos.push(self.userTodo);
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
        self.someTodo = todo;

        self.userTodo = response;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })

  };

  self.updateTodo = function(todo) {
  var resourceObject = TodoUpdateResource;
    resourceObject.updateTodoRequest(
      {_id:todo._id, name: todo.name, description: todo.description}
      , function onSuccess(response) {
         self.someTodo.name = todo.name;
        self.isEditing=false;
        self.userTodo=null;
        console.log('SUCCESS: ', response)
      }, function onError(errorMessage) {
        console.log('ERROR: ', errorMessage)
      })
  };

  self.cancelUpdate = function() {
    self.isEditing=false;
    self.userTodo=null;
  };

  getAllTodos();
});