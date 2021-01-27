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
    nameForm.textContent = 'Welcome to our site ' + userNameProvided;

});
//remove the form
var savedName = localStorage.getItem('userName');
if (savedName) {
    nameForm.textContent = `Thanks for stopping by ${savedName}.  Your participation is key to our results!`;
}
