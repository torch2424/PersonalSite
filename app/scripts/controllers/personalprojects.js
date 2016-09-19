'use strict';

/**
 * @ngdoc function
 * @name personalSiteApp.controller:PersonalprojectsCtrl
 * @description
 * # PersonalprojectsCtrl
 * Controller of the personalSiteApp
 */
angular.module('personalSiteApp')
	.controller('PersonalprojectsCtrl', ['$scope', 'GithubActivityService', function($scope, GithubActivityService) {
		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		//Make a request for the github activity service
		GithubActivityService.events({
			user: 'torch2424',
			params: {
				access_token: '31247baa6d1b50a28cfec0cec627ce9d335d6890',
				callback: 'JSON_CALLBACK'
			}
		}).get().$promise.then(function(events) {
			$scope.events = events.data;
		});

		$scope.options = {
			limit: 4
		};
	}]);
