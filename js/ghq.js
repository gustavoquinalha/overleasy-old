angular
  .module('myApp', []);

function CharactersCtrl($scope) {
  $scope.characters = [
    {
      "id": 1,
      "name": 'Facebook',
      "icon": 'fa fa-facebook',
      "image":'../img',
      "link": 'facebook.html',
      "medida": [
         {
          "capa": '851x315'
         },
         {
          "foto": '851x315'
         }
        ]
    },
    {
      "id": 2,
      "name": 'Youtube',
      "icon": 'fa fa-youtube',
      "link": 'youtube.html',
      "medida": [
         {
          "capa": '851x315'
         },
         {
          "foto": '851x315'
         }
        ]
    },
    {
      "id": 2,
      "name": 'Twitter',
      "icon": 'fa fa-twitter',
      "link": 'twitter.html',
      "medida": [
         {
          "capa": '851x315'
         },
         {
          "foto": '851x315'
         }
        ]
    }




  ];
}

angular
  .module('myApp')
  .controller('CharactersCtrl', CharactersCtrl);