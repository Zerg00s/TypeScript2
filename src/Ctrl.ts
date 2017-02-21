
namespace app {
    'use strict';

    export class Ctrl {
        message: string;
        static inject: Array<string> = ['spService'];
        constructor(private spService: ISpService, private $http: ng.IHttpService) {
        var vm = this;
        $http({
            method: 'GET',
            url:'http://gewg'
        })
        vm.message = spService.getUserStorage('Test');
        }
    }

    angular
        .module('app')
        .controller('Ctrl', Ctrl);
}