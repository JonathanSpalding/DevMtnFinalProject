var app = angular.module('frolfZone');

app.controller('profileCtrl', function($scope, userReference, thingsReference){
  $scope.count = 0;

  // $("#newGame").click(function() {
  //     var location = $('<p contenteditable="true">Type Location Here</p>');
  //     $(this).after(location);
  // });
  // $("#newGame").click(function() {
  //     var location = $('<p contenteditable="true" ng-click="clearName()" ng-model="playerName">Player Name</p>');
  //     $(this).after(location);
  // });
  // $("#newGame").click(function() {
  //   var location = $('<button id="addPlayer">Add Player</button>');
  //   $(this).after(location);
  //   $("#addPlayer").click(function() {
  //     var playerName = $('<p contenteditable="true">Player Name</p>');
  //     $(this).after(playerName);
  //   });
  // });
  // $("newGame").click(function() {
  //   fields.push("Player Name");
  // })



  $scope.profile = userReference;
  $scope.things = thingsReference;
  $scope.addThing = function(){
    $scope.things.$add($scope.thing);
    $scope.thing.name = "";
  };
  $scope.removeThing = function(thing){
    $scope.things.$remove(thing);
  };
  $scope.update = function(){
    $scope.profile.$save();
    $scope.profile.name = "";
  };
});
