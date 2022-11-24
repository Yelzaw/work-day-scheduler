
// current Hour
var currentHrEl = dayjs().format("H");

$(document).ready(function () { //Added $( document ).ready() , will load only when the document is "ready." 
  
  //using function of 'this', 'siblings' and 'parent' collect the note of schedule, save into localstorage.
  $(".saveBtn").on("click",function(){
    var saveText = $(this).siblings(".description").val();
    var saveTime = $(this).parent().attr("id");
    localStorage.setItem(saveTime,saveText);
  });
  //delete the note of schedule
  $(".delBtn").on("click",function(){
    $(this).siblings(".description").text("");
    var saveTime = $(this).parent().attr("id");
    localStorage.removeItem(saveTime);
    location.reload();
  })
  //clear all schedules
  $(".clearBtn").on("click",function(){
    localStorage.clear();
    window.location.reload();
  })
  // extract id and make comparision with current hr, and adjust the class base on hour
  function compareTime() {
    $(".time-block").each(function(){
        var timeNote = parseInt($(this).attr("id").split("hour-")[1]);

        // change the class to "past" if id of time have passed current hr
      if (timeNote < currentHrEl) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
      }
      // change the class to "present" if id of time have same with current hr
      else if (timeNote==currentHrEl) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      // change the class to "future" if id of time have not reach current hr
      else if (timeNote>currentHrEl) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    }
    compareTime()

  // Get the text for same item from localstorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display the current date in the header of the page.
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd MMMM DD, YYYY"));
});
