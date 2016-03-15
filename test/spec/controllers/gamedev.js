'use strict';

describe('Controller: GamedevCtrl', function () {

  // load the controller's module
  beforeEach(module('personalSiteApp'));

  var GamedevCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamedevCtrl = $controller('GamedevCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamedevCtrl.awesomeThings.length).toBe(3);
  });
});
