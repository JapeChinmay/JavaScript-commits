"usestrict";
//DOM manupulation

//textcontent manupulation

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "chinmay";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 232;
document.querySelector(".score").textContent = 100;

document.querySelector(".guess").value = 1000;
console.log(document.querySelector(".guess").value);

///// click events

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  document.querySelector(".message").textContent = "Correct";
});
*/

const secretNumber = Math.trunc(Math.random() * 100);
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when no input
  if (!guess) {
    document.querySelector(".message").textContent = "No guess Made";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correctnumber";
    //changing background  color as guess is correct
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } // guess is higher
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is higher";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost";
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } // guess is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Yourguess is low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost";
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
