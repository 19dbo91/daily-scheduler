//Var Declarations
const displayMsg = {
  // TODO: if needed 
}





/* Wrap all code that interacts with the DOM in a call to jQuery to ensure that
 * the code isn't run until the browser has finished rendering all the elements
 * in the html.
*/



$(document).ready(function() {
  /*// TODO: Add a listener for click events on the save button
   * This code should use the id in the containing time-block as a key to
   * save the user input in local storage.
   * 
   * HINT: What does `this` reference in the click listener function?
   * How can DOM traversal be used to get the "hour-x" id of the time-block containing 
   * the button that was clicked? How might the id be 
   * useful when saving the description in local storage?
  */

  //obj.addListener('click',/*fnName*/);

  /*// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
   * HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
   * How can Day.js be used to get the current hour in 24-hour time?
  */
  
  

  var hour9 = dayjs().set('hour',9).set('minute',0).set('seconds',0);

  console.log(hour9);

  console.log(dayjs().isBefore(hour9));
  
  if (dayjs().isAfter(hour9)){
    //make hour nine 9
    //.addClass FROM jquery
  }


  /*compareID(){
    // get timeNow
    // if ID < timeNow{applyClass(past)}
    // else if ID == timeNow{applyClass(present)}
    // else {applyClass(future)}
  }
  */

  /*applyClass(){
    // this component's class will now remove other time class to apply
  }
  */

  /*// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
   * HINT: How can the idattribute of each time-block be used to do this?
  */

  /*loadLocalData(){

  }
  */

  /* updateText(){

  }
  */
  
  
  // // TODO: Add code to display the current date in the header of the page.
  
  function displayToday(){
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  } //formatting per Mockup: day, month date

  displayToday();
});


/* Must-Haves (from Acceptance Criteria) : 
 * .: daily planner to create a schedule
 * 
 * on open:      today's date @top
 * on scroll-dn: time blocks, standard bus hrs (array?)
 * 
 * timeblock:    color-coded {past, present, future}
 * 
 * on click:
 *  - timeblock:  enter text
 *  - savebutton: save to local storage
 * 
 * on refresh/open: display saved event from local storage
*/

/* Nice to Haves:
 * Font awseome 
 * on lock/unlock: do a bounce
 * on click event && locked : do a shake
*/
