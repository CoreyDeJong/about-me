'use strict';
// var name = prompt('Hello, What is your name?');
// console.log('The user put in ' + name);
// alert('Hello ' + name);

// var pets = prompt('Do you think I have any pets?');

// if(pets.toLowerCase() === 'y'){
//   alert('correct');
// }
// else if(pets.toLowerCase() === 'yes'){
//   alert('correct');
// }
// else if(pets.toLowerCase() === 'n'){
//   alert('incorrect');
// }
// else if(pets.toLowerCase() === 'no'){
//   alert('incorrect');
// }
// else{
//   alert('incorrect');
// }

// var college = prompt('Do you think I went to college?');

// if(college.toLowerCase() === 'y'){
//   alert('correct');
// }
// else if(college.toLowerCase() === 'yes'){
//   alert('correct');
// }
// else if(college.toLowerCase() === 'n'){
//   alert('incorrect');
// }
// else if(college.toLowerCase() === 'no'){
//   alert('incorrect');
// }
// else{
//   alert('incorrect');
// }

// var state = prompt('Do you think I have been to every state?');

// if(state.toLowerCase() === 'y'){
//   alert('correct');
// }
// else if(state.toLowerCase() === 'yes'){
//   alert('correct');
// }
// else if(state.toLowerCase() === 'n'){
//   alert('incorrect');
// }
// else if(state.toLowerCase() === 'no'){
//   alert('incorrect');
// }
// else{
//   alert('incorrect');
// }

// var outdoors = prompt('Do you think I like the outdoors?');

// if(outdoors.toLowerCase() === 'y'){
//   alert('correct');
// }
// else if(outdoors.toLowerCase() === 'yes'){
//   alert('correct');
// }
// else if(outdoors.toLowerCase() === 'n'){
//   alert('incorrect');
// }
// else if(outdoors.toLowerCase() === 'no'){
//   alert('incorrect');
// }
// else{
//   alert('incorrect');
// }

// var experience = prompt('Do you think I have previous programming experience?');

// if(experience.toLowerCase() === 'n'){
//   alert('correct');
// }
// else if(experience.toLowerCase() === 'no'){
//   alert('correct');
// }
// else if(experience.toLowerCase() === 'y'){
//   alert('incorrect');
// }
// else if(experience.toLowerCase() === 'yes'){
//   alert('incorrect');
// }
// else{
//   alert('incorrect');
// }

// //6th question guessing a number

// var correct = 5;
// var numberGuess = 0;

// for (var i = 0; i < 4; i++){
//   var answer = parseInt(prompt('How many guitars do you think I own?'));
//   if(answer < correct){
//     alert('Try again, too low');
//     numberGuess++;
//   }else if(answer > correct){
//     alert('try again, too high');
//     numberGuess++;
//   }else if(answer === correct){
//     alert('Correct, I have 5 guitars');
//     break;
//   }

//   while(numberGuess === 4){
//     alert('I have 5 guitars')
//   }

// };

// 7th Question

// 6 attempts, only need to get one of the answers correctly
// display all correct answers
var userScore = 0;
var questions = 'What are my favorite types of beer?';
var answers = ['porter', 'stout', 'ipa'];
// var response = '';
var beerGuess = 0;

for (var i = 0; i < 6; i++) {
  prompt(questions);
  if (questions.includes(answers[i])) {
    alert('Correct!!');
    userScore++;
  } else {
    alert('No, I like my beer with more flavor!');
    beerGuess++;
  }

  while(beerGuess === 6){
    alert('My favorite beers are' + answers);
  }
}

// alert('You got' + userScore + ' correct, out of ' + questions.length);

// response = prompt(questions);
// if (response.toLowerCase() === answers.toLowerCase()){


// alert('Thank you for answering all of my questions ' + name);