;(function (){

  'use strict';

  angular.module('Komik')

    .controller('Image', ['$scope', '$http', 'ImageService', 'HEROKU', '$location',

      function ($scope, $http, ImageService, HEROKU, $location) {

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
