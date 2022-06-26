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

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No guess Made";
  }
});
