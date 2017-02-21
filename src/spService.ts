namespace app​​ {
    'use strict';

    export interface ISpService {
        /**
         * @param listTitle Title of the List   
         */
        getUserStorage(listTitle:string);
    }
    export class spService implements ISpService {
        static inject: Array<string> = ['$http'];
        constructor(private $http: ng.IHttpService) {
            $http.get('https://geg');
        }
        getUserStorage(listTitle:string){
            
            return {Title: listTitle};
        } 
    }

    angular
        .module('app')
        .service('spService', spService);
}