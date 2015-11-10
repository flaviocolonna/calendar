var app = angular.module("Calendar",[]);
app.directive("calendar",function(){
  return{
    templateUrl: "calendar.html",
    restrict: 'E'
  }
});
app.controller("ScheduleCtrl",function($scope){
  $scope.showSchedule = false;
  $scope.dateSelected = 0;
  var curr = new Date; // get current date
  var first = curr.getDate(); //get first day
  $scope.days = [];
  $scope.weekday = ["Mon","Tue","Wed","Thu","Fri","Sat"];
  $scope.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var counter = 0;
  var i = 0;
  while($scope.days.length<5){//creating the array of the days for the calendar
    var next = new Date(curr.getTime());
    next.setDate(first + i);
    if(next.getDay()==0){
      i++;
      next.setDate(first + i);
    }
    i++;
    $scope.days[counter]=next;
    counter++;
  };
  $scope.select = function(index){
    $scope.dateSelected = index;
  }
});
