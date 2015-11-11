describe("Ang App Data Test", function () { //this test provide a check on the data of the angular app.
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
      scope.schedule = {
        idHouse: "",
        day: new Date(),
        slots: new Array()
      }
  }));
  //ACT and ASSESS
  it('calendar not opened first',function(){
    expect(scope.showSchedule).toEqual(false);
  });
  it('days should be five',function(){
    expect(scope.days.length).toEqual(5);
  });
  it('months should be twelve',function(){
    expect(scope.months.length).toEqual(12);
  });
  it('switching day should change json schedule',function(){
    var curr = new Date();
    scope.select(0,curr);
    var next = new Date(curr.getTime());
    next.setDate(curr.getDate() + 1);
    scope.select(0,next);
    expect(scope.schedule.day).toEqual(next);
  });
  it('should disable the first slot time if current time is over it',function(){
    var curr = new Date(2015, 1, 1, 13);
    scope.dateSelected=0;
    scope.schedule.day = curr;
    var firstSlotDisabled = scope.shouldDisabled(0);
    expect(firstSlotDisabled).toEqual(true);
  });
  it('should disable the second slot time if current time is over it',function(){
    var curr = new Date(2015, 1, 1, 19);
    scope.dateSelected=0;
    scope.schedule.day = curr;
    var secondSlotDisabled = scope.shouldDisabled(1);
    expect(secondSlotDisabled).toEqual(true);
  });
  it('should disable the third slot time if current time is over it',function(){
    var curr = new Date(2015, 1, 1, 23);
    scope.dateSelected=0;
    scope.schedule.day = curr;
    var thirdSlotDisabled = scope.shouldDisabled(2);
    expect(thirdSlotDisabled).toEqual(true);
  });
  it('can scheduling if select at least one slot',function(){
    var curr = new Date(2015, 1, 1, 19);
    scope.select(0,curr);
    scope.selectSlot(2);
    var canSchedule = scope.sendSchedule();
    expect(canSchedule).toEqual(true);
  });
  it('selecting other day should empty slots',function(){
    var curr = new Date(2015, 1, 1, 19);
    scope.select(0,curr);
    scope.selectSlot(2);
    expect(scope.schedule.slots.length).toBe(1);
    var next = new Date(2015, 1, 2, 19);
    scope.select(1,next);
    expect(scope.schedule.slots.length).toBe(0);
  });
  it('selecting');
});
