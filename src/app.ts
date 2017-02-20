namespace app {
    'use strict';

    angular.module('app', [
        
    ]);

    angular
    .module('app')
    .controller('Ctrl', function($scope:ng.IScope, $http:ng.IHttpService){
       var vm = this;
       vm.message = "geeg";
       $http({
           url:'https://gege/',
           method:'GET'
       })
    });
}

