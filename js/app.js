var app = angular.module('frolfZone', ['ngRoute', 'firebase']);

app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'js/Home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/login', {
      templateUrl: 'js/Login/loginTmpl.html',
      controller: 'loginCtrl'
    })
  .when('/profile/:userId', {
    templateUrl: 'js/Profile/profileTmpl.html',
    controller: 'profileCtrl',
    resolve: {
      userReference: function(firebaseService, $route){
        return firebaseService.getUser($route.current.params.userId);
      },
      thingsReference: function(firebaseService, $route){
        return firebaseService.getThings($route.current.params.userId);
      }
    }
  })
  .when('/courses', {
    templateUrl: 'js/Courses/coursesTmpl.html',
    controller: 'coursesCtrl'
  })
  .when('/courses/Bicentennial_Park', {
    templateUrl: 'js/Courses/coursesTmpl.html',
    controller: 'coursesCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});

$(document).ready(function() {

    $("button[id='newGame']").click(function() {
        var domElement = $('<p contenteditable="true">Type Location Here</p>');
        $(this).after(domElement);
    });

});
