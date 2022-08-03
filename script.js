'use strict';
/*
// document.querySelector(`.message`); // . for classes -- # for ids
console.log(document.querySelector(`.message`).textContent);
*/
//NEW LESSON
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct number!🎉`; // .textcontent IS USED FOR TEXT ELEMENTS

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

console.log(document.querySelector(`.guess`).value); // .value IS USED FOR INPUT ELEMENTS
document.querySelector(`.guess`).value = 23;
*/
//NEW LESSON

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   //addEventListener EXPECTS THE EVENT AND A FUNCTION
//   console.log(document.querySelector(`.guess`).value); //REMEMBER TO USE .value FOR INPUT ELEMENTS
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0

//CHANGES THE TEXT ON THE GUESSING TEXT
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
}

const exFunction = function () {
  const guess = Number(document.querySelector(`.guess`).value); //REMEMBER TO USE .value FOR INPUT ELEMENTS


  //WHEN THERE IS NO INPUT 
  if (!guess) {
    displayMessage(`🛑Please insert a number!!`);
    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage(`Correct number!🎉`);
    document.querySelector(`.number`).textContent = secretNumber;
    //CURRENT HIGHSCORE GETS UPDATED
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = score;
    };
    document.querySelector(`body`).style.backgroundColor = `#60b347`; // CSS PROPERTIES NEED TO BE WRITTEN IN CAMEL CASE NOTATION
    document.querySelector(`.number`).style.width = `30rem`; //PROPERTY VALUES MUST BE WRITTEN AS A STRING
    // score = 20;
    // document.querySelector(`.score`).textContent = score;
    //GUESS IS TOO HIGH
  } else if (guess !== secretNumber) {
    if (document.querySelector(`.score`).textContent > 1) {
      displayMessage(guess > secretNumber ? `📈Too high` : `📉Too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`😭You lost the game!`);
      document.querySelector(`body`).style.backgroundColor = `#FF0000`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.score`).textContent = 0;
    }
  }
};
document.querySelector(`.check`).addEventListener(`click`, exFunction);

//CHALLENGE
//RESETS ALL THE VALUES IN THE PAGE.
const resetFunction = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.guess`).value = null;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
};

document.querySelector(`.again`).addEventListener(`click`, resetFunction);