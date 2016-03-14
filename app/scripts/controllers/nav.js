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

    //Initialize if we are mobile or dektop
    //and if our navbar is collapsed
    $scope.collapseNav = true;
    $scope.isMobile = function() {

        //Check to see if the css rule for the collapsible applies
        var mq = window.matchMedia('(max-width: 767px)');

        return mq.matches;
    }

    $scope.isActive = function(route) {
           return route === $location.path();
       }

  });
