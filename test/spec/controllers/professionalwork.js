'use strict';

describe('Controller: ProfessionalworkCtrl', function () {

  // load the controller's module
  beforeEach(module('personalSiteApp'));

  var ProfessionalworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfessionalworkCtrl = $controller('ProfessionalworkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfessionalworkCtrl.awesomeThings.length).toBe(3);
  });
});
