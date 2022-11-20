// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var clickedBtn = $('.saveBtn');
var userInputArea = $('textarea');

var notes = []


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

  var renderStoredNotes = function() {
    userInputArea.textContent = '';

    var variable = JSON.parse(localStorage.getItem('eventNote'));
      console.log(variable.note.trim());
      console.log(variable.time.trim());
      notes.push(variable);
      console.log(notes);

      for (i = 0; i < notes.length; i++) {
        userInputArea.textContent = notes[i].note;
        console.log(userInputArea.textContent);
      }
  }








  var checkLocalStorage = function() {

    //Need to check if there is already information stored in local storage
    //And if there is, to go ahead and render those items in their respective places
      if () {

      }
  }


  clickedBtn.on('click', function() {
    // And save it to local storage
    // Grab from local storage
    // Add to html from local storage
    var eventNote = $(this).parent().children().eq(1).val();
    var eventHourID = $(this).parent().attr('id');

    
    localStorage.setItem('eventNote', JSON.stringify({time: eventHourID, note: eventNote}));
    

    renderStoredNotes();

    // if (!localStorage.getItem('eventNote')) {
    //   var variable = localStorage.setItem('eventNote', JSON.stringify(eventNote));
    //   storedNotes.value = variable;
    // 
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

  
  checkLocalStorage();
});

