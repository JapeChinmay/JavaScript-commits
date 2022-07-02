"use strict";

const airline = "Indian Airways";
const airplane = "AWE23";

console.log(airline.slice(-3));
console.log(airline.slice(-3, -1));

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

const passenger = "ChiNMay";

const passLower = passenger.toLocaleLowerCase();
const correctPassName = passLower[0].toUpperCase() + passLower.slice(1);
console.log(correctPassName);

//// check email/////////

const email = "hello@jape.io";
const loginEmail = "Hello@Jape.io";

const lowerEmail = loginEmail.toLowerCase().trim(); //trim start , trim end
console.log(lowerEmail === email);

//replacing

const price = "288.33223$";
const priceEU = price
  .replace("$", "╰(*°▽°*)╯╰(*°▽°*)╯╰(*°▽°*)╯")
  .replace(".", ",");

console.log(priceEU);

//////////////////////////////////////////

const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === "B" || seatLetter === "b") {
    console.log("You got the middle seat");
  } else console.log("You got lucky");
};

checkMiddleSeat("11b");
