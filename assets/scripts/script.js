/*Removed from HTML

      <!-- Use class for "past", "present", and "future" to apply styles to the
        time-block divs accordingly. The javascript will need to do this by
        adding/removing these classes on each div by comparing the hour in the
        id to the current hour. The html provided below is meant to be an example
        demonstrating how the css provided can be leveraged to create the
        desired layout and colors. The html below should be removed or updated
        in the finished product. Remember to delete this comment once the
        code is implemented.
        -->

      <!-- Example of a past time block. The "past" class adds a gray background color. -->
      <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Same as above except The "present" class adds a red background color. -->
      <!-- Same as above except The "future" class adds a green background color. -->
*/

//Debug Printer
function p(displayMe){console.log(displayMe);}

//#region Constants Contingents
const workDay = {startTime: 9, duration: 8}; // change to appropriate variable shift
// #endregion

//#region Generic Methods
function loadData(keyString ){
  localStorage.getItem(keyString);
}
function saveData(keyString, valueString){
  localStorage.setItem(keyString, valueString);
}
function createChildOf(parentObj, childString){
  let child = document.createElement(childString);
  parentObj.appendChild(child);
  return child;
}
//#endregion

//#region Draw Time Blocks
const containerID = document.getElementById("container");

function createTimeBlock(hourNum){
  let timeBlock = createChildOf(containerID, "div");
  timeBlock.id = "hour-"+hourNum;
  timeBlock.className = "row time-block present";
  
  hour = createChildOf(timeBlock,"div");
  hour.className = "col-2 col-md-1 hour text-center py-3";
  hour.textContent = dayjs().set('hour',hourNum).set('minute',0).set('seconds',0).format("hA");

  description = createChildOf(timeBlock,"textarea");
  description.className = "col-8 col-md-10 description";
  description.setAttribute("rows", 3);

  button = createChildOf(timeBlock,"button");
  button.className = "btn saveBtn col-2 col-md-1";
  button.setAttribute("aria-label","save");
  
  iTag = createChildOf(button,"i");
  iTag.className = "fas fa-save";
  iTag.setAttribute("aria-hidden","true");
}
for(i=0; i<=workDay.duration;i++){//p(Building blocks...);
  createTimeBlock(workDay.startTime+i);
}
//#endregion



/* Note on jQuery Call
 * Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
*/

$(document).ready(function() {
  
  //#region Save Button //TODO (1)
  // TODO: Add a listener for click events on the save button

  $("button").on("click",function(){
    let parent = $(this).parent();
    let userText = parent.children("textarea").val();
    p("Storing pair... ["+parent.attr("id") + " : " + userText+"]");
    saveData(parent.attr("id"),userText)//p("Storing pair... " + parent.toString() + ":"+ userText);
  }); //toggle class??

  //! HINTs:
  // This code should use the id in the containing time-block as a key to save the user input in local storage.
  // What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
  // How might the id be useful when saving the description in local storage?
  //#endregion

  //#region Conditional Color-Coding //TODO(1)
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.

  function swapColorCode(selected, oldClass, newClass){
    if (oldClass.hasClass(oldClass)){
      selected.removeClass(oldClass);
      selected.addClass(newClass);
    }else{p(selected+" does not have "+oldClass);}

  }

  if(){}

  /*
  if this block time:59:59 is before current time(past)
   paint it gray
  if this block time is after current time (future)
   paint it green
  else{nothing. code loads present}
  */



  //! HINTS:
  //How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
  //How can Day.js be used to get the current hour in 24-hour time?
  //#endregion

  //#region (G/S)etter //TODO(1)
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  
  function displayToText(localData){

  }

  // ! HINT:
  //How can the id attribute of each time-block be used to do this?

  //#endregion

  //#region Date Display // // TODO(0)
  // // TODO: Add code to display the current date in the header of the page.
  function displayToday(){
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  } //formatting per Mockup: day, month date
  //#endregion 

  //order of calls
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
