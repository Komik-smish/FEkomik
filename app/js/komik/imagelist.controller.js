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

      ImageService.getAssets().success( function (data) {
        console.log(data.assets);
        $scope.assetList = data.assets;
      });


      $scope.store = function (image_url) {

        $('#all-pix').slideUp();
        $('#single-pix').slideDown();

        $('canvas').drawImage({
          layer: true,
          source: image_url,
          width: 400,
          height: 400,
          x: 250, y: 250,
          autosave: true,
          crossOrigin: 'anonymous'
        });
      };

      $scope.addToCanvas = function (assetUrl) {
        console.log(assetUrl);
        $('canvas').drawImage({
          layer: true,
          source: assetUrl,
          draggable: true,
          bringToFront: true,
          width: 200,
          height: 200,
          x: 200, y: 200,
          crossOrigin: 'anonymous',
        });
        $(event.target).fadeOut();
      };

      $scope.download = function () {
        $('canvas').saveCanvas();
        var image = $('canvas').getCanvasImage('png');
        console.log(image);
        var a = $("<a>").attr("href", image).attr("download", "img.png").appendTo("body");

        a[0].click();
        a.remove();
      };


    }]);

}());
