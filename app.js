console.log('app.js is connected');

var nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('name form is listening');
    var userNameProvided = document.getElementById('name').value;
    console.log('userNameProvided', userNameProvided);
    //save it to local storage
    localStorage.setItem('userName', userNameProvided);
    //show it on the page
    nameForm.textContent = 'Daniel made this work: name entered is ' + userNameProvided;

});
