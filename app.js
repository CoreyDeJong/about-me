'use strict';

var hello = prompt('Hello, What is your name?');

function yourName(){
  alert('hello ' + hello + '.');
}

var userScore = 0;

function question1(){
  var pets = prompt('Do you think I have any pets?');

  if(pets.toLowerCase() === 'y'){
    alert('correct');
    userScore++;
  }
  else if(pets.toLowerCase() === 'yes'){
    alert('correct');
    userScore++;
  }
  else if(pets.toLowerCase() === 'n'){
    alert('incorrect');
  }
  else if(pets.toLowerCase() === 'no'){
    alert('incorrect');
  }
  else{
    alert('incorrect');
  }
}

function question2(){
  var college = prompt('Do you think I went to college?');

  if(college.toLowerCase() === 'y'){
    alert('correct');
    userScore++;
  }
  else if(college.toLowerCase() === 'yes'){
    alert('correct');
    userScore++;
  }
  else if(college.toLowerCase() === 'n'){
    alert('incorrect');
  }
  else if(college.toLowerCase() === 'no'){
    alert('incorrect');
  }
  else{
    alert('incorrect');
  }
}

function question3(){
  var state = prompt('Do you think I have been to every state?');

  if(state.toLowerCase() === 'y'){
    alert('correct');
    userScore++;
  }
  else if(state.toLowerCase() === 'yes'){
    alert('correct');
    userScore++;
  }
  else if(state.toLowerCase() === 'n'){
    alert('incorrect');
  }
  else if(state.toLowerCase() === 'no'){
    alert('incorrect');
  }
  else{
    alert('incorrect');
  }
}

function question4(){
  var outdoors = prompt('Do you think I like the outdoors?');

  if(outdoors.toLowerCase() === 'y'){
    alert('correct');
    userScore++;
  }
  else if(outdoors.toLowerCase() === 'yes'){
    alert('correct');
    userScore++;
  }
  else if(outdoors.toLowerCase() === 'n'){
    alert('incorrect');
  }
  else if(outdoors.toLowerCase() === 'no'){
    alert('incorrect');
  }
  else{
    alert('incorrect');
  }
}

function question5(){
  var experience = prompt('Do you think I have previous programming experience?');

  if(experience.toLowerCase() === 'n'){
    alert('correct');
    userScore++;
  }
  else if(experience.toLowerCase() === 'no'){
    alert('correct');
    userScore++;
  }
  else if(experience.toLowerCase() === 'y'){
    alert('incorrect');
  }
  else if(experience.toLowerCase() === 'yes'){
    alert('incorrect');
  }
  else{
    alert('incorrect');
  }
}

function question6(){
  var correct = 5;
  var numberGuess = 0;

  for (var i = 0; i < 4; i++){
    var answer = parseInt(prompt('How many guitars do you think I own?'));
    if(answer < correct){
      alert('Try again, too low');
    }else if(answer > correct){
      alert('try again, too high');
    }else if(answer === correct){
      alert('Correct, I have 5 guitars');
      userScore++;
      break;
    }else if(numberGuess === 4){
      alert('I have 5 guitars');
      break;
    }
  }
}

// Original Code:

// function question7(){

//   var answers = ['porter', 'stout', 'ipa'];

//   for (var j = 0; j < 6; j++) {
//     var question = prompt('What are my favorite types of beer?');
//     if (answers.includes(question)){
//       alert('Correct!!');
//       userScore++;
//       j = 6;
//     } else {
//       alert('No, I like my beer with more flavor!');
//     }

//     if(j === 6){
//       alert('My favorite beers are ' + answers[0] + ', ' + answers[1] + ' and ' + answers [2]);
//     }
//   }

function question7(){

  var answers = ['porter', 'stout', 'ipa'];

  for (var j = 0; j < 6; j++) {
    var question = prompt('What are my favorite types of beer?');
    if (answers.includes(question)){
      alert('Correct!!');
      userScore++;
      j = 6;
    } else {
      alert('No, I like my beer with more flavor!');
    }

    if(j === 6){
      alert('My favorite beers are ' + answers[0] + ', ' + answers[1] + ' and ' + answers [2]);
    }
  }
}

yourName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert('You got ' + userScore + ' correct, out of 7.');

alert('Thank you for answering all of my questions ' + hello);