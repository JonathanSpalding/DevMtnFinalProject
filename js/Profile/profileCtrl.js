var app = angular.module('frolfZone');

app.controller('profileCtrl', function($scope){

//   $("#newGame").click(function() {
//       var location = $('<p contenteditable="true">Type Location Here</p>');
//       $(this).after(location);
//   });
//   $("#newGame").click(function() {
//       var location = $('<p contenteditable="true" ng-click="clearName()" ng-model="playerName">Player Name</p>');
//       $(this).after(location);
//   });
// $("#newGame").click(function() {
//     var location = $('<button id="addPlayer">Add Player</button>');
//     $(this).after(location);
//     $("#addPlayer").click(function() {
//       var playerName = $('<p contenteditable="true">Player Name</p>');
//       $(this).after(playerName);
//     });
// });

$("newGame").click(function() {

})

$scope.test = function(text) {
  alert(text);
}

$scope.clearName = function() {
  console.log('clearing!');
  $scope.playerName = '';
}

$scope.filters={};
$scope.fields=["Location","Player Name","holes"];


// $scope.hideGame = function() {
//         $scope.hideGame = !$scope.hideGame;
//     };

});
