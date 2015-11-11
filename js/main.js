var app = angular.module("Calendar",[]);
app.directive("calendar",function(){
  return{
    templateUrl: "calendar.html",
    restrict: 'E'
  }
});
app.controller("ScheduleCtrl",function($scope){
  $scope.showSchedule = false;
  $scope.dateSelected = 0; //this is the index of the date selected and is between 0 and 5
  var curr = new Date; // get current date
  $scope.schedule = {// this is the JSON that will be sent to the server to schedule a viewing
    idHouse: '', //this is the id of the house
    day: curr,  //this is the day choosed by the visitor
    slots: new Array() //these are the slots time that the visitor has choosed to view the house
  };
  var first = curr.getDate(); //get curr day
  $scope.days = []; //days where is possible schedule a viewing
  $scope.weekday = ["Mon","Tue","Wed","Thu","Fri","Sat"];
  $scope.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var counter = 0; //index of the days array
  var i = 0;  //this is a counter to choose 5 days after the current
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
  $scope.select = function(index,day){
    $scope.dateSelected = index;
    $scope.schedule.day = day;
    $scope.schedule.slots = new Array();
  }
  $scope.shouldDisabled = function(time){
    if($scope.dateSelected==0){
      switch (time) {
        case 0:
          if($scope.schedule.day.getHours()<=12){
            return false;
          }else{
            return true;
          }
          break;
        case 1:
          if($scope.schedule.day.getHours()<=18){
            return false;
          }else{
            return true;
          }
          break;
        case 2:
          if($scope.schedule.day.getHours()<=22){
            return false;
          }else{
            return true;
          }
          break;
      }
    }else{
      return false;
    }
  }
  $scope.selectSlot = function(time){
    if($scope.schedule.slots.indexOf(time)>=0){
      $scope.schedule.slots.splice($scope.schedule.slots.indexOf(time),1);
    }else if(!$scope.shouldDisabled(time)){
      $scope.schedule.slots.push(time);
    }
  }

  $scope.sendSchedule = function(){
    if($scope.schedule.slots.length>0){
    //  swal("Perfect!", "You have scheduled the viewing!", "success");
      console.log($scope.schedule);
      return true;
    }else{
    //  swal("Error!", "You have to choose at least one slot!", "error");
      return false;
    }
  }
});
