'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isActive = function(route) {
           return route === $location.path();
       }

  });
