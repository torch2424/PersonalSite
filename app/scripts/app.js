'use strict';

/**
 * @ngdoc overview
 * @name personalSiteApp
 * @description
 * # personalSiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/android', {
        templateUrl: 'views/android.html',
        controller: 'AndroidCtrl'
      })
      .when('/webdev', {
        templateUrl: 'views/webdev.html',
        controller: 'WebdevCtrl'
      })
      .when('/gamedev', {
        templateUrl: 'views/gamedev.html',
        controller: 'GamedevCtrl',
        controllerAs: 'Gamedev'
      })
      .when('/bio', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/professionalWork', {
        templateUrl: 'views/professionalwork.html',
        controller: 'ProfessionalworkCtrl',
        controllerAs: 'professionalWork'
      })
      .when('/personalProjects', {
        templateUrl: 'views/personalprojects.html',
        controller: 'PersonalprojectsCtrl',
        controllerAs: 'personalProjects'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
