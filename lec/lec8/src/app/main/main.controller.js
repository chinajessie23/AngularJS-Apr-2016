(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;
    self.greeting = "Hello World";

    self.phoneExp= /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;

    self.submitTheForm = function(){
        if(self.myForm.$valid){
            // submit
        }
    }
    // self.states=['ca','fl',,'ny'];
//     self.statees=[
// {name:"ca",abbr:'c'},
// {name:"fl",abbr:'f'},
// {name:"ny",abbr:'n'},
//     ];

self.states={
    NY:'new york',
    FL: 'florida',
    CA:'california'
}

    };

  }

)();
