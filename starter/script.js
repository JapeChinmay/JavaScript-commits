//////// STRIGNS///////////////////////////

const firstName = "chinmay";
const job = "software engg";
const birthYear = 1998;

let age = 2022 - birthYear;

//// normal sol
const chinmay = "I'm" + firstName + ", a" + age + ", year old" + job;
console.log(chinmay);

///// template literal

const chinmayNew = `I'm ${firstName} my age is ${age} , and I am  a ${job}`;
console.log(chinmayNew);

console.log(`Just a string by ${firstName}`);

////// multiline string before es6

console.log("String with \n\
multiple \n\
lines");

/// with template strings

console.log(`string 
with 
multiple
lines`);
