var app = angular.module('frolfZone');

app.controller('profileCtrl', function($scope){
  $scope.count = 0;
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

// $("newGame").click(function() {
//   fields.push("Player Name");
// })
//
//
//
// $scope.filters={};
// $scope.fields=["Location","Player Name","holes"];
//
//
// $scope.hideGame = function() {
//         $scope.hideGame = !$scope.hideGame;
//     };

//Step 2 of Registration
$scope.register = function () {
  return authService.register($scope.details, loginCallback);
};

$scope.status = 'Register';
$scope.showReg = function(){
  if($scope.status === 'Register'){
    $scope.status = 'Login';
  } else {
    $scope.status = 'Register';
  }
  $scope.reg = !$scope.reg;
};


});
