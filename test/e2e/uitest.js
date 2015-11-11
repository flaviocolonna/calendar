describe('calendar functionality', function() {
  beforeEach(function(){
    browser.get("http://local.calendar.it");
  });
  it("page should have calendar element to import the calendar mobile component",function(){
    var calendar = element(by.tagName("calendar"));
    expect(calendar).not.toBeNull();
  });
  it('should calendar be closed and then opened if click of calendar-button', function() {
    var calendarContainer = element(by.css('#scheduling'));
    expect(calendarContainer.getAttribute("class")).not.toMatch("opened");
    var calendarButton = element(by.css("#calendar-button"));
    calendarButton.click();
    expect(calendarContainer.getAttribute("class")).toMatch("opened");
  });
  it("selecting one slot should change schedule button class",function(){
    var secondDay = element(by.css("#day-1"));
    secondDay.click(); //clicking on the second day to make available each slot during this test
    expect(secondDay.getAttribute("class")).toMatch("day-selected"); //the day clicked should be selected by adding the class day-selected
    var firstSlot = element(by.css("#slot-0"));
    firstSlot.click();  //clicling on the first slot
    expect(firstSlot.getAttribute("class")).toMatch("btn-success"); //the first slot should be selected
    var scheduleButton = element(by.css("#schedule-button"));
    expect(scheduleButton.getAttribute("class")).toMatch("btn-success");
  });
  it("at first schedule button is disabled",function(){
    var scheduleButton = element(by.css("#schedule-button"));
    expect(scheduleButton.getAttribute("class")).not.toMatch("btn-success");
  });
  it("clicking one slot in the day choosed should enable schedule button but clicking other day should disabled schedule button",function(){
    var secondDay = element(by.css("#day-1"));
    secondDay.click(); //clicking on the second day to make available each slot during this test
    var firstSlot = element(by.css("#slot-0"));
    firstSlot.click();  //clicling on the first slot
    var scheduleButton = element(by.css("#schedule-button"));
    expect(scheduleButton.getAttribute("class")).toMatch("btn-success");

    var secondDay = element(by.css("#day-2"));
    secondDay.click(); //clicking on the third day to empty the slots selected before
    var scheduleButton = element(by.css("#schedule-button"));
    expect(firstSlot.getAttribute("class")).not.toMatch("btn-success"); //the first slot should not be selected
    expect(scheduleButton.getAttribute("class")).not.toMatch("btn-success"); //schedule button should not have btn-success that means it is enabled
  });
  it("clicking on close calendar, the calendar should be closed",function(){
    var closeElement = element(by.css("#close"));
    var calendarContainer = element(by.css('#scheduling'));
    var calendarButton = element(by.css("#calendar-button"));
    calendarButton.click();
    expect(calendarContainer.getAttribute("class")).toMatch("opened");
    closeElement.click();
    expect(calendarContainer.getAttribute("class")).not.toMatch("opened");
  });
});
