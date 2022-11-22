$(function () {
// Saved JQuery selectors
var clickedBtn = $('.saveBtn');

// Implication of dayjs to format the current date and hour for tracking
var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM YYYY');
currentDay.text(today);

// Triggers an event when the button element is clicked
// Traversed the DOM using this to target each specific value of note and hour to use later
clickedBtn.on('click', function() {
  var eventNote = $(this).siblings('.description').val();
  var eventHourID = $(this).parent().attr('id').split('hour-')[1];
  
  console.log(eventNote);
  console.log(eventHourID);
  
  // Since the items are already strings, I don't need to stringify these items for JSON
  // Using the eventHourID as the key
  localStorage.setItem(eventHourID, eventNote);
})

// Used to set the storage outside of the main function so that it would be able to display on reload
// Did not get working
function setStorage() {

  // Maybe try looping through each to get the items?
  // Otherwise I would have to call this on every seperate item
  $('.description').each(function() {
    var storedHour = $(this).parent().attr('id').split('hour-')[1];
    var storedNote = localStorage.getItem(storedHour);

    // Now I need to check if there is already items in local storage and if there is, display it
    if (storedNote !== null) {
      // What I wasn't doing before was storing the value within the parameters of .val()
      // Reading the documentation on val allowed this work this way
      $(this).val(storedNote);
    }
  })
}

var colorChange = function() {
  // With the same consideration to the comment below, moved the current hour into this function for iteration
  var currentHour = dayjs().hour();
  
  // Using the proper JQuery loop instead of a for loop
  $('.time-block').each(function (){
    // Moving the timeID into the function instead as a global variable, that way it can be used on iteration properly
    var timeID = parseInt($(this).attr('id').split('hour-')[1]);
    
    // Setting the logic behind the color traversal
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
setStorage();
});


