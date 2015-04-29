/**
 * Created by trettke on 25/04/15.
 */
'use strict';

angular.module('taylorrettkeApp').factory('blogPosts', function() {
  return [
    {
      Name: 'computer-play-like-charlie-parker',
      Title: 'Can You Make a Computer Play Like Charlie Parker?',
      Author: 'Taylor Rettke',
      Date: '26/04/2015',
      Feature: true,
      Image: './images/charlie-header.jpg',
      PreviewImage: './images/charlie-preview.jpg',
      Summary: 'I am about to begin a project, attempting to build a program that can generate ' +
      'a \'Charlie Parker Style\' solo over a given chord progression. This posts explores the ' +
      'reasoning and the goals of the project',
      Article: './views/blog/charlie-parker-computer.html'
    }
  ];
});
