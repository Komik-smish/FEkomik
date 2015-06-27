;(function (){

  'use strict';

  angular.module('Komik')
    .controller('Image', ['$scope', '$http', 'ImageService', 'PARSE', '$location',

  function ($scope, ImageService, $http, PARSE, $location) {

    var imageGroup = [];

    $scope.removePic = function(x) {

      ImagelistService.deleteImage(x).success( function(){

        $('[data-id="'+ x.objectId + '"]').fadeOut( function () {
          $scope.imageGroup = _.without($scope.imageGroup, x);
        });

      });
    };

    $scope.uploadImage = function(x) {

      ImagelistService.upload(x).success( function() {

        $location.path('/');
        $scope.image = {};

      });
    };

  }]);


}());
