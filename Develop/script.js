$(function () {
// Saved JQuery selectors
var clickedBtn = $('.saveBtn');
var userInputArea = $('textarea');
// This is used to get all the individual div of hours
var timeID = $('.container-fluid').children('.time-block');

var notes = [];
var variable = '';
var eventHourIDArr = [];
console.log(timeID);

// Used to set the storage outside of the main function so that it would be able to display on reload
// Did not get working
function setStorage() {
  variable = JSON.parse(localStorage.getItem('eventNote'));
  notes.push(variable);
  this.userInputArea.value = 'sample code';
}
setStorage();



// Triggers an event when the button element is clicked
// Traversed the DOM using this to target each specific value of note and hour to use later
  clickedBtn.on('click', function() {
    var eventNote = $(this).parent().children().eq(1).val();
    var eventHourID = $(this).parent().attr('id');

    txt = eventNote;
    localStorage.setItem('eventNote', JSON.stringify({time: eventHourID, note: eventNote}));

    setStorage();
  })
});

// Implication of dayjs to format the current date and hour for tracking
var today = dayjs().format('dddd, MMMM YYYY');
var currentDay = $('#currentDay');
var currentHour = dayjs().format('H');

currentDay.text(today);
var arrForNum = [];

// Used to loop through the length of the divs and slice either the last string letter or the last two string letters
// This is what I was trying to use to compare to the current hour of the day
// Was unable to get this working
for (i = 0; i < timeID.length; i++) {
  
  arrForNum.push(timeID[i].id.slice(5));
  console.log(arrForNum[i]);

    // For some reason I was unable to properly compare the values of dayjs and my sliced elements until I parsed the day into a number
    // From here, I know I have to select the current timeID and set that class to whichever condition
    // However, I was unable to complete this too
    if (+arrForNum[i] < +currentHour) {
        timeID.addClass('past');
        console.log('current hour');
      } else if (+arrForNum[i] > +currentHour) {
        timeID.addClass('future');
      } else if (arrForNum[i] == +currentHour) {
        timeID.addClass('present');
      }
      console.log(timeID[i])
}
// I was unable to get a lot of the functionality working however I have set up a session to go over this project more in depth
// And also go over the local storage implication as well
// Disapointed on results however I will be coming back to finish this project after my tutor session