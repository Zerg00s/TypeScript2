var app;
(function (app) {
    'use strict';
    var spService = (function () {
        function spService($http) {
            this.$http = $http;
            $http.get('https://geg');
        }
        spService.prototype.getUserStorage = function (listTitle) {
            return { Title: listTitle };
        };
        return spService;
    }());
    spService.inject = ['$http'];
    app.spService = spService;
    angular
        .module('app')
        .service('spService', spService);
})(app || (app = {}));
//# sourceMappingURL=spService.js.map