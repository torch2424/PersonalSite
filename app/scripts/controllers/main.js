'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
