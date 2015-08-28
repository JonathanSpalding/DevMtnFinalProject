var app = angular.module('frolfZone', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'js/Home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/profile', {
      templateUrl: 'js/Profile/profileTmpl.html',
      controller: 'profileCtrl'
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
