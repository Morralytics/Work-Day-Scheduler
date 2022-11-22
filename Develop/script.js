$(function () {
// Saved JQuery selectors
var clickedBtn = $('.saveBtn');
var userInputArea = $('textarea');
// This is used to get all the individual div of hours


var notes = [];
var variable = '';

// Implication of dayjs to format the current date and hour for tracking
var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM YYYY');
currentDay.text(today);

// Used to set the storage outside of the main function so that it would be able to display on reload
// Did not get working
function setStorage() {
  variable = JSON.parse(localStorage.getItem('eventNote'));
  notes.push(variable);
}
setStorage();



// Triggers an event when the button element is clicked
// Traversed the DOM using this to target each specific value of note and hour to use later
  clickedBtn.on('click', function() {
    var eventNote = $(this).siblings('.description').val();
    var eventHourID = $(this).parent().attr('id').split('hour-')[1];

    console.log(eventNote);
    console.log(eventHourID)
    // txt = eventNote;
    // localStorage.setItem('eventNote', JSON.stringify({time: eventHourID, note: eventNote}));
  })

  var colorChange = function() {
    // With the same consideration to the comment below, moved the current hour into this function for iteration
    var currentHour = dayjs().hour();
    
    $('.time-block').each(function (){
  
    // Moving the timeID into the function instead as a global variable, that way it can be used on iteration properly
      var timeID = parseInt($(this).attr('id').split('hour-')[1]);
      console.log(timeID);
      console.log(currentHour);
  
        if (timeID < currentHour) {
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
          } else if (timeID == currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
  })
  }

  // Need to call the color change function on load so that it is visible at the start of the page
  colorChange();
});


