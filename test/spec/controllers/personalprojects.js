'use strict';

describe('Controller: PersonalprojectsCtrl', function () {

  // load the controller's module
  beforeEach(module('personalSiteApp'));

  var PersonalprojectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonalprojectsCtrl = $controller('PersonalprojectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonalprojectsCtrl.awesomeThings.length).toBe(3);
  });
});
