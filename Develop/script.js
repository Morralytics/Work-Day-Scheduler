// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

  // for (i = 0; i < notes.length; i++) {
  //   // txt = notes[i].time;
  // }
}



// userInputArea.textContent = localStorage.getItem('eventNote');
setStorage();

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

 
  // var checkLocalStorage = function() {
  //   var variable = JSON.parse(localStorage.getItem('eventNote'));
  //   //Need to check if there is already information stored in local storage
  //   //And if there is, to go ahead and render those items in their respective places
  //     if (variable.note !== null) {
  //       notes.push(variable);
  //     }
  //     renderStoredNotes();
  // }

// Triggers an event when the button element is clicked
// Traversed the DOM using this to target each specific value of note and hour to use later
  clickedBtn.on('click', function() {
    var eventNote = $(this).parent().children().eq(1).val();
    var eventHourID = $(this).parent().attr('id');

    txt = eventNote;
    localStorage.setItem('eventNote', JSON.stringify({time: eventHourID, note: eventNote}));

    setStorage();
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

  // var renderStoredNotes = function() {
  //   userInputArea.textContent = '';
    
    
  //     // console.log(variable.note.trim());
  //     // console.log(variable.time.trim());
  //     notes.push(variable);
  //     // console.log(notes);
  //   userInputArea.textContent = localStorage.getItem('eventNote');
  //     for (i = 0; i < notes.length; i++) {
  //       console.log("working");
  //       userInputArea.textContent = notes[i].note;
  //       console.log(userInputArea.textContent);
  //     }
  // }
  // loadNotes();
  // renderStoredNotes();
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
  // if (arrForNum[i] < currentHour) {
    //   timeID.addClass('past');
    //   console.log("less than current hour");
    //   console.log(arrForNum[i]);
    // } 

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

// if (arrForNum[0] < +currentHour) {
//   console.log('9am is less than current hour')
// }
// console.log(arrForNum);
// console.log(arrForNum[0]);
// console.log(arrForNum);
// if (+arrForNum[7] == 16) {
//   console.log('equals');
// }

// console.log(arrForNum);



// I was unable to get a lot of the functionality working however I have set up a session to go over this project more in depth
// And also go over the local storage implication as well
// Disapointed on results however I will be coming back to finish this project after my tutor session