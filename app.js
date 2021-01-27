console.log('app.js is connected');

//There is a form on the page with ID 'name-form', so to let JavaScript manipulate
//it I set a var nameForm to getElementById.
var nameForm = document.getElementById('name-form');

//this will happen upon page load, the var firstTime becomes a new Date object
//and var 'begin' gets the firstTime.getTime() which records the current time of
//the day in milliseconds
var firstTime = new Date;
var begin = firstTime.getTime();

//this event Listener waits for the submit button on the form to be clicked.
nameForm.addEventListener('submit', function(event) {
    //prevent refresh
    event.preventDefault();

    //now we want to record the time (in milliseconds) that the button was clicked
    //so secondTime becomes a new Date object...  (i wish dates were so easy to get)
    var secondTime = new Date;
    //the var end calls the getTime() method on that secondTime Date object and
    //records the current time in milliseconds.
    var end = secondTime.getTime();

    //there's an H1 on the HTML side that serves as a place to write text to
    //so we grab that elementById below
    var timerDisplay = document.getElementById('time');
    //now we display our number by setting the .textContent to a calculation
    //that is the second time in milliseconds minus the first.
    //...essentially this tells us the time elapsed between the page loading and
    //the submit button being clicked for the form.
    timerDisplay.textContent = end - begin;

    //this just grabs the name entered in the form and stores in a variable
    var userNameProvided = document.getElementById('name').value;
    
    //below replaces the form's text entry box with a string, which is what
    //you're trying to get to happen on your project.
    //by setting the formElement.textContent to a string the entry box and button
    // poof disappear.
    nameForm.textContent = 'Daniel made this work: name entered is ' + userNameProvided;

    //  Daniel > others.
});
