;(function (){

  'use strict';

  angular.module('Komik')
    .controller('ImageList', ['$scope', 'ImageService', '$http', 'HEROKU',

    function ($scope, ImageService, $http, HEROKU) {

      $scope.storage = [];

      ImageService.getAll().success(function(data) {
        console.log(data);
        $scope.imageList = data;
      });

      $scope.store = function (image_url) {

        $('#all-pix').slideUp();
        $('#single-pix').slideDown();

        $('#canvas').drawImage({
          layer: true,
          source: image_url,
          width: 400,
          height: 400,
          x: 250, y: 250,
          autosave: true,
          crossOrigin: 'anonymous'
        });
      };



    }]);

}());
