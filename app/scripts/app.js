'use strict';

/**
 * @ngdoc overview
 * @name taylorrettkeApp
 * @description
 * # taylorrettkeApp
 *
 * Main module of the application.
 */
angular
  .module('taylorrettkeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:article', {
        templateUrl: 'views/blog-template.html',
        controller: 'BlogCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/work/:project', {
        templateUrl: 'views/work-template.html',
        controller: 'WorkCtrl'
      })
      .when('/me', {
        templateUrl: 'views/me.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.directive('backImg', function() { //Directive for setting a divs background image inline
  return function(scope, element, attrs){
    var url = attrs.backImg; // Sets the background-image url to the inline variable
    element.css({
      'background-image': 'url(' + url +')',
      'background-size' : 'cover'
    });
  };
});

