'use strict';

/**
 * @ngdoc function
 * @name taylorrettkeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taylorrettkeApp
 */
angular.module('taylorrettkeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showLocation = function () {
      var location = $scope.$location.url();
      console.log(location);
    };
  });
