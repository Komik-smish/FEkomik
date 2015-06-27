;(function (){

  'use strict';

  angular.module('Komik', ['ngRoute']).constant('PARSE', {
    URL: 'https://www.parse.com/1/',
    CONFIG: {

      headers: {
      'X-Parse-Application-Id': 'RiQBNnq9Zct2WTY7fCRA7EYr5euAisXXb0UWYy5E',
      'X-Parse-REST-API-Key': 'AEGIes9PzVjnRLAE7sMxnoo8vGvU32joy8mmMCf2'
      }
    }
  })
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      controller: 'ImageList',
      templateUrl: "js/komik/home.tpl.html"
    })

    .when('/create', {
      controller: 'Image',
      templateUrl: 'js/komik/create.tpl.html'
    });

  }]);

  function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
    }
  }

  draw();

}());

