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
      Summary: 'Recently I build a website and online store for Recyclabills - handmade wallets made from recycled ' +
      'Bonsoy containers. I started making these wallets late last year, and people seemed to like the idea...',
      Project: './views/work/recyclabills.html',
      Type: 'work'
    }
  ];
});
