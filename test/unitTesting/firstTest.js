describe("Ang App Architecture Test", function () { //this test provide a check on the basic architecture of the angular app.
  // Arrange
  var module;
  var scope;
  var controller;
  beforeEach(function(){
    module=angular.mock.module("Calendar");
  });
  beforeEach(angular.mock.inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      controller = $controller("ScheduleCtrl", {
        $scope: scope
      });
  }));
  //ACT and ASSESS
  it('calendar module exist', function () {
    expect(module).not.toBeNull();
  });
  it('calendar module has schedule controller',function(){
    expect(controller).not.toBeNull();
  });
});
