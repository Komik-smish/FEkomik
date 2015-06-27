;(function (){

  'use strict';

  angular.module('Komik')

  .service('ImageService', ['$http', 'HEROKU', '$routeParams',
    function ($http, HEROKU, $routeParams) {

      // Endpoint
      var endpoint = HEROKU.URL;

      // Image upload constructor
      var Image = function (options) {
        this.image_url = options.image_url;
      };

      // Get all assets
      this.getAccessories = function () {
        return $http.get(endpoint + '/accessories', HEROKU.CONFIG);
      };

      // Get all images
      this.getAll = function() {
        return $http.get(endpoint + '/images', HEROKU.CONFIG);
      };

      // Delete image
      this.deleteImage = function(x) {
        var URLtoDelete = endpoint + x.objectId;
        return $http.delete(URLtoDelete, HEROKU.CONFIG);
      };

      // Add new image
      this.upload = function(x) {
        var img = new Image(x);
        return $http.post(endpoint + '/images', img, HEROKU.CONFIG);
      };

  }]);

}());
