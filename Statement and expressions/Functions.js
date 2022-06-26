"use strict";

////////////////////////

function logger() {
  console.log("chinmay");
}

///////calling //////////
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples, and ${oranges} orangers`;
  return juice;
}

///////calling /////// storing//////////
const appleJuice = fruitProcessor(2, 34);
const appleJuice1 = fruitProcessor(123, 456);

////////printing///////////
console.log(appleJuice, appleJuice1);

/////////////////////////////////////////////////////
//////////////// writingfunctions //////////////////
function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const yourAge = calcAge1(1998);
console.log(yourAge);

/// #2//////////

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const yourAge2 = calcAge2(1997);

console.log(yourAge, yourAge2);

////////////////Arrow functions ////////////////////////

const calcAge3 = (birthYear) => 2022 - birthYear;

console.log(calcAge3(34));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, "chinmay"));

///////////functions calling more functions//////////

function cuttingFruite(fruit) {
  return fruit * 4;
}
function juice1(apples, watermelon) {
  const applesPieaces = cuttingFruite(apples);
  const watermelonPieaces = cuttingFruite(watermelon);

  const makingJuice = `Juice has ${applesPieaces} apples, and ${watermelonPieaces} watemelons.`;

  return makingJuice;
}

console.log(juice1(12, 34));
