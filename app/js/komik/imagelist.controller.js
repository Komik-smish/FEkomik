;(function (){

  'use strict';

  angular.module('Komik')
    .controller('ImageList', ['$scope', 'ImageService', '$http', 'PARSE',

    function ($scope, ImageService, $http, PARSE) {

      ImageService.getAll().success(function(data) {
        $scope.imageList = data.results;
      });


    }]);

}());
