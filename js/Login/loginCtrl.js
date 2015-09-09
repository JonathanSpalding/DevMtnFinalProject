var app = angular.module('frolfZone');

app.controller('loginCtrl', function($scope, authService, $location){
  var loginCallback = function(user){
    user.uid = user.uid.replace('simplelogin:', '');
    $location.path('/profile/' + user.uid)
  };

  $scope.login = function () {
    return authService.login($scope.details, loginCallback);
  };

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
