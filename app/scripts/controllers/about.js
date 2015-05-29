'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
