
namespace app {
    'use strict';

    export class Ctrl {
        message: string;
        static inject: Array<string> = ['spService'];
        constructor(private spService: ISpService, private $http: ng.IHttpService, $log:ng.ILogService) {
        var result = $http.get("https://api.fixer.io/latest").then(result=>{
            $log.debug('result:', result.data, result.statusText);
            return {message:'string!'};
        })
        var vm = this;
        vm.message = spService.getUserStorage('Test');
        }
    }

    angular
        .module('app')
        .controller('Ctrl', Ctrl);
}