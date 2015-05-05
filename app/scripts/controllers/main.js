'use strict';

/**
 * @ngdoc function
 * @name taylorrettkeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taylorrettkeApp
 */
angular.module('taylorrettkeApp')
  .controller('MainCtrl', function ($scope, blogPosts, workProjects) {
    $scope.allStories = blogPosts.concat(workProjects);
    $scope.featureStories = _.filter($scope.allStories, { 'Feature': true });
  });
