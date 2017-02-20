var app;
(function (app) {
    'use strict';
    angular.module('app', []);
    angular
        .module('app')
        .controller('Ctrl', function ($scope, $http) {
        var vm = this;
        vm.message = "geeg";
        $http({
            url: 'https://gege/',
            method: 'GET'
        });
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map