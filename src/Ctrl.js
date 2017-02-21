var app;
(function (app) {
    'use strict';
    var Ctrl = (function () {
        function Ctrl(spService, $http) {
            this.spService = spService;
            this.$http = $http;
            var vm = this;
            $http({
                method: 'GET',
                url: 'http://gewg'
            });
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