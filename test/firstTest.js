describe("Module Test", function () {
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
  it('calendar not opened first',function(){
    expect(scope.showSchedule).toEqual(false);
  });
  it('days should be five',function(){
    expect(scope.days.length).toEqual(5);
  });
});
