/**
 * Created by trettke on 25/04/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name taylorrettkeApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the taylorrettkeApp
 */


angular.module('taylorrettkeApp')
  .controller('NavCtrl', function ($scope, $location, $window) {
    $scope.navShowing = false;

    //Find the parent directory so the nav arrow reflects it
    $scope.setParent = function () {
      $scope.fullUrl = angular.isString($location.url()) ? $location.url().substring(1) : '';
        // Location without first '/'
      $scope.slashPosition = /[/]/.test($scope.fullUrl) ? $scope.fullUrl.search('/') : $scope.fullUrl.length;
        // Find a second '/' and return position, otherwise return url length
      $scope.currentParent = $scope.fullUrl.substring(0, $scope.slashPosition);
       // Trim the url to just the parent directory
    };

    $scope.setParent(); //Set these variables as soon as the page loads

    // When the location changes, update the nav parent directory
    // AND hide the nav on small screens
    $scope.$on('$locationChangeStart', function() {
      console.log('new location : ' + $location.url());
      $scope.navShowing = false; // hide the nav every time a new page loads
      $scope.setParent(); // set the correct parent directory for the nav

      ga('send', 'pageview', { // Track pageviews in google analytics
        page: $location.url(),
        title: $location.url()
      });
    });

    // Toggles the nav menu in and our on small devices
    $scope.toggleNav = function () {
      $scope.navShowing = !$scope.navShowing;
      console.log($scope.navShowing ? 'Nav is shown' : 'Nav is hidden');
    };


  });
