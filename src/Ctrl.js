var app;
(function (app) {
    'use strict';
    var Ctrl = (function () {
        function Ctrl(spService, $http, $log) {
            this.spService = spService;
            this.$http = $http;
            var result = $http.get("https://api.fixer.io/latest").then(function (result) {
                $log.debug('result:', result.data, result.statusText);
                return { message: 'string!' };
            });
            var vm = this;
            vm.message = spService.getUserStorage('Test');
        }
        return Ctrl;
    }());
    Ctrl.inject = ['spService'];
    app.Ctrl = Ctrl;
    angular
        .module('app')
        .controller('Ctrl', Ctrl);
})(app || (app = {}));
//# sourceMappingURL=Ctrl.js.map