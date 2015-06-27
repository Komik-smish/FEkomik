;(function (){

  'use strict';

  angular.module('Komik')
    .controller('ImageList', ['$scope', 'ImageService', '$http', 'HEROKU',

    function ($scope, ImageService, $http, HEROKU) {

      $scope.storage = [];

      ImageService.getAll().success(function(data) {

        $scope.imageList = data;
      });

      ImageService.getAccessories().success( function (data) {

        $scope.accessoryList = data.accessories;
      });


      $scope.store = function (image_url) {

        $('#all-pix').fadeOut();
        $('#single-pix').fadeIn();

        $('canvas').drawImage({
          layer: true,
          source: image_url,
          width: 400,
          height: 400,
          x: 250, y: 250,
          autosave: true,
          crossOrigin: 'anonymous'
        });

        $('canvas').saveCanvas();
      };

      $scope.addToCanvasSmall = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 50,
          height: 50,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasMedium = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 125,
          height: 125,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasLarge = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 200,
          height: 200,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasFlippedSmall = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: -50,
          height: 50,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasFlippedMedium = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: -125,
          height: 125,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvasFlippedLarge = function (assetUrl) {

        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: -200,
          height: 200,
          x: 200, y: 200,
          crossOrigin: 'anonymous'
        });
      };

      $scope.download = function () {
        $('canvas').saveCanvas();
        var image = $('canvas').getCanvasImage('png');

        var a = $("<a>").attr("href", image).attr("download", "img.png").appendTo("body");

        a[0].click();
        a.remove();
      };


    }]);

}());
