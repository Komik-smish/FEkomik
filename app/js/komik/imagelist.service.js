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

    this.getAll = function() {
      $http.get(endpoint, PARSE.CONFIG);
    };

    this.deleteImage = function(x) {
      var URLtoDelete = endpoint + x.objectId;
      return $http.delete(URLtoDelete, PARSE.CONFIG);
    };

    this.upload = function(x) {
      var img = new Image(x);
      return $http.post( endpoint, img, PARSE.CONFIG);
    };

  }]);

}());
