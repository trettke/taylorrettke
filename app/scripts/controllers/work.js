/**
 * Created by trettke on 29/04/15.
 */

'use strict';

angular.module('taylorrettkeApp')
  .controller('WorkCtrl', function ($scope, $location, workProjects) {

    /* VARIABLES
     ------------------------------------------------------------ */

    $scope.workProjects = workProjects; //list of projects and JSON information for each
    $scope.location = $location.url().substring(1); //URL without the first '/'
    $scope.UrlProject = $scope.location.substring($scope.location.search('/') + 1); //finds the url after the second '/'
    $scope.currentProject = _.findIndex($scope.workProjects, { 'Name': $scope.UrlProject }); // finds the project in workProjects from URL

    $scope.lastProject = $scope.currentProject === $scope.workProjects.length - 1; // 'True' if this is the last project in workProjects
    $scope.firstProject = $scope.currentProject === 0; // 'True' if this is the first project in workProjects

  });

