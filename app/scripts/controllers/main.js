'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('MainCtrl', function ($scope, $location)
  {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Fucntion to find the active page
    $scope.isActive = function(route) {
       return route === $location.path();
   }
  });
