/**
 * Created by trettke on 29/04/15.
 */
'use strict';

angular.module('taylorrettkeApp').factory('workProjects', function() {
  return [
    {
      Name: 'recyclabills',
      Title: 'Recyclabills Website and Online Store',
      Author: 'Taylor Rettke',
      Date: '02/04/2015',
      Feature: true,
      Link: 'https://www.recyclabills.com',
      Image: './images/recyclabills-header.jpg',
      PreviewImage: './images/recyclabills-preview.jpg',
      Summary: 'Recyclabills are great wallets made out of recycled bonsoy milk containers. I made one for myself ' +
      'late last year, and it generated a huge number of comments and interest! So I thought I might as well ' +
      'sell them online and help out Pollinate Energy while I was at it',
      Project: './views/work/recyclabills.html',
      Type: 'work'
    }
  ];
});
