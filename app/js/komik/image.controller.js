;(function (){

  'use strict';

  angular.module('Komik')

    .controller('Image', ['$scope', '$http', 'ImageService', 'HEROKU', '$location',

      function ($scope, $http, ImageService, HEROKU, $location) {


        ImageService.getAssets().success( function (data) {
          console.log(data.assets);
          $scope.assetList = data.assets;
        });

        $('canvas').drawImage({
          layer: true,
          source: "http://i.imgur.com/0XYZC08.jpg",
          width: 400,
          height: 400,
          x: 250, y: 250,
          autosave: true,
          crossOrigin: 'anonymous'
        });

        $scope.addToCanvas = function (assetUrl) {
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

      ImageService.deleteImage(x).success( function(){

        var imageGroup = [];


        $scope.uploadImage = function(x) {
          ImageService.upload(x).success( function() {

          $('[data-id="'+ x.objectId + '"]').fadeOut( function () {
            $scope.imageGroup = _.without($scope.imageGroup, x);
          });

        });
      };

        $scope.uploadImage = function(x) {
          ImageService.upload(x).success( function() {
            $location.path('/');
            $scope.image = {};
          });
        };

  }]);


}());
