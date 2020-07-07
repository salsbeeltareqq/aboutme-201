'use strict';
var score = 0
var username = prompt ('welcome to the game! what is your name?');
console.log('User answer was ' + username);
alert ('Welcome ' + username + '! hope you\'ll answer them all correct!');

var answer1 = prompt('guess my name');
console.log('User answer was ' + answer1.toLowerCase());
if (answer1.toLowerCase() == 'salsbeel' ) {
  alert ('yaay! you know my name');
  console.log('Correct Answer');
  score +=1;


} else {
  alert ('Oops! you don\'t know my name');
  console.log('Wrong answer');
}


var answer2 = prompt('Do I love my old guitar ?');
console.log('User answer was ' + answer2.toLowerCase());

if (answer2.toLowerCase() == 'yes') {
  alert ('yaay! I really love my old guitar!');
  console.log('Correct Answer');
  score +=1;


} else {
  alert ('Oops! I do love it');
  console.log('Wrong answer');
}


var answer3 = prompt ('Do I manage the content of my repositories or someone else do it for me?');
console.log('User answer was ' + answer3.toLowerCase());

if (answer3.toLowerCase() === 'yes') {
  alert ('yeah I manage them by myself!');
  console.log('Correct Answer');
  score +=1;
} else {
  alert ('that\'s impossible to let someone manage my repo ;)');
  console.log('Wrong answer');
}

var answer4 = prompt ('do i love sport');
console.log('User answer was ' + answer4.toLowerCase());

if (answer4.toLowerCase() === 'yes') {
  alert ('sure i adore it');
  console.log('Correct Answer');
  score +=1;
} else {
  alert ('no actually i adore it ');
  console.log('Wrong answer');
}

var answer5 = prompt ('Did I work in my free time ?');
console.log('User answer was ' + answer5.toLowerCase());

if (answer5.toLowerCase() === 'yes') {
  alert ('yes i do ');
  console.log('Correct Answer');
  score +=1;
} else {
  alert ('no , i actully do ');
  console.log('Wrong answer');
}





alert ('Good Job ' + username + '!');


var guess = prompt ('Can You Guess this is the question number what? you have only four attempts');
var guessint = parseInt(guess);

console.log('the user input Number is ' + guess);
var questionNumber = 6;
console.log (typeof(guess))
for (var attempt = 1; attempt <= 4; attempt++) {
  var still = 4 - attempt
  console.log ('user still have ' + still + ' attempts');

  if (guessint > questionNumber) {

    alert ('too far');
    console.log('user\'s Answer smaller than the correct answer');
     guess = prompt ('Can You Guess this is the question number what? you still have ' + still + 'attempts');
     guessint = parseInt(guess);

  } else if (guessint < questionNumber) {

    alert ('Noo try to pick bigger number');
    console.log('user\'s Answer smaller than the correct answer');
     guess = prompt ('Can You Guess this is the question number what? you still have ' + still + 'attempts');
     guessint = parseInt(guess);
   }

    else if (guessint === questionNumber) {

    alert ('Exactly! you\'r answering the sixth question now!');
    console.log('Correct Answer');
    score +=1

    break
  } else { alert ('you still have ' + still + ' attemptes' )

  }
  console.log('this is attempt number ' + attempt)
}


var userguitarmodel = prompt ('I love guitars, can you guess one of them?').toLowerCase();
var MyguitarModel = ['electric',  'classic','acoustic'] ;

for ( var attempt = 0; attempt < 5; attempt++)
{
  if (userguitarmodel === MyguitarModel[0] || userguitarmodel === MyguitarModel[1] || userguitarmodel === MyguitarModel[2] )
  {
    console.log('correct answer');
    score +=1

    alert ('yaay ' + username + ' !! Yeah! I love it' );
    break;
  } else
  {
    console.log('your answer is incorrect');
    userguitarmodel = prompt ('noo I don\'t like it .. try another model of guitar').toLowerCase();

  }
}
alert ('The guitars which I love are ' + MyguitarModel[0] + ' & ' + MyguitarModel[1] + ' & ' + MyguitarModel[2] );

alert ('your score is '+ score + ' out of 7');
if (score >= 5){
  alert ('Congrats' + username);
} else {
  alert ('you can play it many times if you want');
}
