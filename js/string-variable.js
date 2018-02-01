// create variables to hold the name and note text.
var username;
var message;

// assign values to these variables.
username = 'Noel';
message = 'Hey ' + username + ' see our upcoming range';

// get the element with an id of name.
var elName = document.getElementById('name');
// replace the content of this element.
elName.textContent = username;

// get the element eith an id of note
var elNote = document.getElementById('note');
// replace the content of this element.
elNote.textContent = message;