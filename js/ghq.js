angular
  .module('myApp', []);

function CharactersCtrl($scope) {
  $scope.characters = [
    {
      "id": 1,
      "name": 'Facebook',
      "color": '#3B5998',
      "icon": 'fa fa-facebook',
      "image":'../img/facebook.svg',
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
      "color": '#E62117',
      "icon": 'fa fa-youtube',
       "image":'../img/facebook.svg',
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
      "id": 3,
      "name": 'Twitter',
      "color": '#00ABF1',
      "icon": 'fa fa-twitter',
       "image":'../img/facebook.svg',
      "link": 'twitter.html',
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
      "id": 4,
      "name": 'Linkedin',
      "color": '#0177B5',
      "icon": 'fa fa-linkedin',
       "image":'../img/facebook.svg',
      "link": 'linkedin.html',
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