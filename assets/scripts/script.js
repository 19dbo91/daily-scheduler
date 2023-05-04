/* // TODO: Possible improvements
 * we can call functions that iterate through all time blocks
 */


//Debug Printer
function p(displayMe){console.log(displayMe);}

//#region Constants Contingents
const workDay = {startTime: 9, duration: 8}; // change to appropriate variable shift
// #endregion

//#region Generic Methods
function loadData(keyString){
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
  timeBlock.className = "row time-block";
  
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
  
  //#region Save Button // // TODO (0)
  // // TODO: Add a listener for click events on the save button

  $("button").on("click",function(event){
    event.preventDefault();
    let parent = $(this).parent();
    let userText = parent.children("textarea").val();
    p("Storing pair... ["+parent.attr("id") + " : " + userText+"]");
    saveData(parent.attr("id"),userText);
    //p("Storing pair... " + parent.toString() + ":"+ userText);
  }); 

  //! HINTs:
  // This code should use the id in the containing time-block as a key to save the user input in local storage.
  // What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
  // How might the id be useful when saving the description in local storage?
  //#endregion

  //#region Conditional Color-Coding // // TODO(0)
  // // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.

  function checkTense(timeBlock){
    //let currentHour= parseInt(dayjs().set('hour',8).format("H")); // tester line: block out other current hour
    let currentHour= parseInt(dayjs().format("H"));
    let blockHour=parseInt(dayjs().set('hour',timeBlock).format("H"));


    if(blockHour > currentHour){
      return 'future';
    }
    else if(blockHour < currentHour){
      return 'past';
    }
    else{
      return 'present'}
  };

  function paintBlocks(){
    for (let i = 0; i<=workDay.duration; i++){
      let currentBlock=$("#container").children().eq(i);
      let blockNum = parseInt(currentBlock.attr("id").slice(5));
      let timeString = checkTense(blockNum);
      currentBlock.addClass(timeString);
    }
  }



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

  //#region (G/S)etter // // TODO(0)
  // // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  
  function fillBlocks(){
    for(let i =0 ; i <= workDay.duration; i++){
      let timeblock = $("#container").children().eq(i);
      let timeID= timeblock.attr("id");
      let loadedData = localStorage.getItem(timeID);
      timeblock.children("textarea").text(loadedData);
      p("Loading content "+timeID+"..."+loadedData);
    }
  }

  // ! HINT:
  //How can the id attribute of each time-block be used to do this?

  //#endregion

  //#region Date Display // // TODO(0)
  // // TODO: Add code to display the current date in the header of the page.
  function displayToday(){
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  }
  //#endregion 

  //order of calls
  displayToday();
  paintBlocks();
  fillBlocks()
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
 * on other: do a bounce
 * on click event && locked : do a shake
*/
