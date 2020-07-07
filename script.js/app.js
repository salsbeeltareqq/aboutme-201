'use strict';
var username = prompt ('welcome to the game! what is your name?');
console.log('User answer was ' + username);
alert ('Welcome ' + username + '! hope you\'ll answer them all correct!');

var answer1 = prompt('guess my name');
console.log('User answer was ' + answer1.toLowerCase());
if (answer1.toLowerCase() == 'salsbeel' ) {
  alert ('yaay! you know my name');
  console.log('Correct Answer');

} else {
  alert ('Oops! you don\'t know my name');
  console.log('Wrong answer');
}


var answer2 = prompt('Do I love my old guitar ?');
console.log('User answer was ' + answer2.toLowerCase());

if (answer2.toLowerCase() == 'yes') {
  alert ('yaay! I really love my old guitar!');
  console.log('Correct Answer');

} else {
  alert ('Oops! I do love it');
  console.log('Wrong answer');
}


var answer3 = prompt ('Do I manage the content of my repositories or someone else do it for me?');
console.log('User answer was ' + answer3.toLowerCase());

if (answer3.toLowerCase() === 'yes') {
  alert ('yeah I manage them by myself!');
  console.log('Correct Answer');
} else {
  alert ('that\'s impossible to let someone manage my repo ;)');
  console.log('Wrong answer');
}

var answer4 = prompt ('do i love sport');
console.log('User answer was ' + answer4.toLowerCase());

if (answer4.toLowerCase() === 'yes') {
  alert ('sure i adore it');
  console.log('Correct Answer');
} else {
  alert ('no actually i adore it ');
  console.log('Wrong answer');
}

var answer5 = prompt ('Did I work in my free time ?');
console.log('User answer was ' + answer5.toLowerCase());

if (answer5.toLowerCase() === 'yes') {
  alert ('yes i do ');
  console.log('Correct Answer');
} else {
  alert ('no , i actully do ');
  console.log('Wrong answer');
}





alert ('Good Job ' + username + '!');