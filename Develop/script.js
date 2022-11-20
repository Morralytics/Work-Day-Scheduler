// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var clickedBtn = $('.saveBtn');

$(function (

) {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  // clickedBtn.on('click', function() {
  //   var logTxt = $('.description').val();
  //   console.log(logTxt);

  clickedBtn.on('click', function() {

    // This works if a certain element is triggered with the is(hour-10)
    // Next I need to target any element that is clicked
    // And save it to local storage
    // Grab from local storage
    // Add to html from local storage
    var eventNote = $(this).parent().children().eq(1).val();
    console.log(eventNote);
    // if ($(this).parent().is('#hour-10')) {
      
    // } else {
    //   console.log('working but not in hour 10')
    // }
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd, MMMM YYYY');
  var currentDay = $('#currentDay');
  var currentHour = dayjs().format('H');

  currentDay.text(today + ' ' + currentHour);

  console.log(currentHour);
});
