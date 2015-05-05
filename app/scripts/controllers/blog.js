/**
 * Created by trettke on 26/04/15.
 */


'use strict';

angular.module('taylorrettkeApp')
  .controller('BlogCtrl', function ($scope, $location, blogPosts) {

    /* VARIABLES
    ------------------------------------------------------------ */

    $scope.blogPosts = blogPosts; //list of Blog Posts and JSON information for each one
    $scope.location = $location.url().substring(1); //URL without the first '/'
    $scope.UrlArticle = $scope.location.substring($scope.location.search('/') + 1); //finds the url after the second '/'
    $scope.currentArticle = _.findIndex($scope.blogPosts, { 'Name': $scope.UrlArticle }); // finds the article in blogPosts from URL

    $scope.lastPost = $scope.currentArticle === $scope.blogPosts.length - 1; // 'True' if this is the last blog post in blogPosts
    $scope.firstPost = $scope.currentArticle === 0; // 'True' if this is the first post in blogPosts

    //Logs information on location and article
    $scope.showPath = function () {
      console.log('complete location : ' + $location.url() );
      console.log('complete location ignore first : ' + $location.url().substring(1) );
      console.log('cut to second / : ' + $scope.location.substring($scope.location.search('/') + 1));
      console.log('First blog Name : ' + $scope.blogPosts[0].Name);
      console.log('Current Article: ' + $scope.currentArticle);
    };

    console.log($scope.currentArticle);

    $scope.nextPage = function () {
      $scope.currentArticle = $scope.blogPosts.length - 1 > $scope.currentArticle ? $scope.currentArticle + 1 : $scope.currentArticle;
    };

    $scope.previousPage = function () {
      $scope.currentArticle = $scope.currentArticle > 0 ? $scope.currentArticle - 1 : $scope.currentArticle;
    };

  });


