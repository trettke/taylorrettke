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
      Summary: 'Recently I built a website and online store for Recyclabills - handmade wallets made from recycled ' +
      'Bonsoy containers. I started making these wallets late last year, and people seemed to like the idea...',
      Project: './views/work/recyclabills.html',
      Type: 'work'
    },
    {
      Name: 'redgum-ridge',
      Title: 'Redgum Ridge Web-platform Prototype',
      Author: 'Taylor Rettke',
      Date: '04/05/2015',
      Feature: false,
      Link: 'http://www.redgumridge.com.s3-website-ap-southeast-2.amazonaws.com/',
      Image: './images/redgum-ridge-header.jpg',
      PreviewImage: './images/redgum-ridge-preview.jpg',
      Summary: 'This is a prototype I built for an eco-friendly, sustainable and organic farm in the Margaret River' +
      'district of Western Australia. The site features the...',
      Project: './views/work/redgum-ridge.html',
      Type: 'work'
    }

  ];
});
