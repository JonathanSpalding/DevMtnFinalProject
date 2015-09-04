var app = angular.module('frolfZone');

app.controller('gameCtrl', function($scope, userReference, thingsReference){
  $scope.profile = userReference;
  $scope.things = thingsReference;
  $scope.addThing = function(){
    $scope.things.$add($scope.thing);
  }
  $scope.removeThing = function(thing){
    $scope.things.$remove(thing);
  }
  $scope.update = function(){
    $scope.profile.$save();
  };
});
