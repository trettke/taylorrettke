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
      Summary: 'I began playing piano when I was 5 years old. My father was (and still is) a jazz musician and music teacher, ' +
      'so he had every intention of starting me early. As a result...',
      Article: './views/blog/charlie-parker-computer.html',
      Type: 'blog'
    }
  ];
});
