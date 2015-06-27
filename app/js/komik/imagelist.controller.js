;(function (){

  'use strict';

  angular.module('Komik')
    .controller('ImageList', ['$scope', 'ImageService', '$http', 'HEROKU',

    function ($scope, ImageService, $http, HEROKU) {

      ImageService.getAll().success(function(data) {
        $scope.imageList = data.results;
      });

    }]);

}());
