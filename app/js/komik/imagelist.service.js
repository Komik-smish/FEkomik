;(function (){

  'use strict';

  angular.module('Komik')

  .service('ImageService', ['$http', 'PARSE', '$routeParams', function($http, PARSE, routeParams){

    var endpoint = PARSE.URL + 'classes/images';

  }]);

}());
