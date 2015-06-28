;(function (){

  'use strict';

  angular.module('Komik', ['ngRoute']).constant('HEROKU', {

    URL: 'http://salty-peak-7300.herokuapp.com',
    CONFIG: {
      // headers: {
      // 'X-Parse-Application-Id': 'RiQBNnq9Zct2WTY7fCRA7EYr5euAisXXb0UWYy5E',
      // 'X-Parse-REST-API-Key': 'AEGIes9PzVjnRLAE7sMxnoo8vGvU32joy8mmMCf2'
      // }
    }
  })

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
      controller: 'ImageList',
      templateUrl: "js/komik/home.tpl.html"
    })

    .when('/create', {
      controller: 'Image',
      templateUrl: 'js/komik/create.tpl.html'
    })

    .when('/addimage', {
      controller: 'Image',
      templateUrl: 'js/komik/addimage.tpl.html'
    })


    .when('/instructions', {
      templateUrl: 'js/komik/instructions.tpl.html'
    })

    .when('/komiks', {
      controller: 'ImageList',
      templateUrl: 'js/komik/komiks.tpl.html'
    });



  }]);


}());

