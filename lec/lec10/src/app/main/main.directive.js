(function() {
  'use strict';

  angular
    .module('template')
    .directive('gdBasicTemplateUrl',function(){
        return{
            templateUrl:'app/main/gd-basic-template-url.html'
        }
    })
    .directive('gdBasic',function(){
        return{
            template:'<h3>Hello World</h3>'

        };
    })

})();
