;(function (){

  'use strict';

  angular.module('Komik')

  .service('ImageService', ['$http', 'PARSE', '$routeParams', function($http, PARSE, routeParams){

    // Endpoint
    var endpoint = PARSE.URL + 'classes/images';

    // Image upload constructor
    var Image = function (options) {
      this.image_url = options.image_url;
    };

    // Get all assets
    this.getAssets = function () {
      return $http.get(endpoint, PARSE.CONFIG);
    };


  }]);

}());
