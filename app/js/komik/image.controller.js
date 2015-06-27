;(function (){

  'use strict';

  angular.module('Komik')
    .controller('Image', ['$scope', 'ImageService',

      function ($scope, ImageService) {

        $('canvas').drawImage({
          layer: true,
          source: "http://i.imgur.com/0XYZC08.jpg",
          width: 400,
          height: 400,
          x: 250, y: 250,
          autosave: true,
          crossOrigin: 'anonymous'
        })

        .drawImage({
            layer: true,
            source: "http://i422.photobucket.com/albums/pp302/KatieLezz/Clothes/Hat-cowboy-brown-icon-1.png",
            draggable: true,
            bringToFront: true,
            width: 200,
            height: 200,
            x: 200, y: 200,
            dragstop: function () {
              $('canvas').saveCanvas();
              var image = $('canvas').getCanvasImage('png');
              console.log(image);
              var a = $("<a>").attr("href", image).attr("download", "img.png").appendTo("body");

              a[0].click();

              a.remove();
            },
            crossOrigin: 'anonymous'
        });

      }

    ]);


}());
