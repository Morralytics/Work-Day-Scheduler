$(function () {
// Saved JQuery selectors
var clickedBtn = $('.saveBtn');
var userInputArea = $('textarea');
// This is used to get all the individual div of hours


var notes = [];
var variable = '';
var eventHourIDArr = [];
// console.log(timeID);

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
    var eventNote = $(this).parent().children().eq(1).val();
    var eventHourID = $(this).parent().attr('id');

    txt = eventNote;
    localStorage.setItem('eventNote', JSON.stringify({time: eventHourID, note: eventNote}));

    colorChange();
  })
});

// Implication of dayjs to format the current date and hour for tracking
var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM YYYY');


currentDay.text(today);
var arrForNum = [];

// Used to loop through the length of the divs and slice either the last string letter or the last two string letters
// This is what I was trying to use to compare to the current hour of the day
// Was unable to get this working
var colorChange = function() {
  // With the same consideration to the comment below, moved the current hour into this function for iteration
  var currentHour = dayjs().format('H');
  
  $('.time-block').each(function (){

  // Moving the timeID into the function instead as a global variable, that way it can be used on iteration properly
    var timeID = parseInt($(this).attr('id').split('hour-')[1]);
    console.log(timeID);

      if (timeID < +currentHour) {
          $(this).addClass('past');
        } else if (timeID > +currentHour) {
          $(this).addClass('future');
        } else if (timeID == +currentHour) {
          $(this).addClass('present');
        }
})
}
// I was unable to get a lot of the functionality working however I have set up a session to go over this project more in depth
// And also go over the local storage implication as well
// Disapointed on results however I will be coming back to finish this project after my tutor session