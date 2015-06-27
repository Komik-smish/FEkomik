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

        $('#all-pix').slideUp();
        $('#single-pix').slideDown();

        $('canvas').drawImage({
          layer: true,
          source: image_url,
          width: 400,
          height: 400,
          x: 200, y: 200,
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

      $scope.addText = function (inputText) {
        console.log(inputText);
        $('canvas').drawText({
          fillStyle: '#f23c27',
          draggable: true,
          strokeStyle: '#25a',
          strokeWidth: 0,
          x: 150, y: 100,
          fontSize: 36,
          fontFamily: 'Bangers, cursive',
          text: inputText
        });
      };


    }]);

}());
