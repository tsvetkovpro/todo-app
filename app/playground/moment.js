var moment = require ('moment');

console.log (moment ().format ());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment ();

console.log ('current ', now.unix ());

var timestamp = 1459342532;
var currentMoment = moment.unix (timestamp);
console.log ('current moment', currentMoment.format ('DD MMMM, YYYY @ h:mm a'));
console.log ('current moment', currentMoment.format ('MMMM Do, YYYY @ h:mm A'));