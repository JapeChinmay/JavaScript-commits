"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function pritnAge() {
    //local scop of age and birthyear
    const outPut = `Your are the ${age}, born in ${birthYear}.`;
    console.log(outPut);
  }
  pritnAge();

  return age;
}
//globally defined
const firstName = "chinmay";

console.log(calcAge(1998));
/* we cannot use variable outside the function
, we can only use passed values and locally defined variables, using varable out
side the scop gives error.
repeated variable names can be use if they are in diff scop. they have different
identity.

*/

////HOISTING//////

//using function declarations before they are defined.

var me = "chinmay";
let job = "enng";
const year = 1998;

//variables
console.log(addNUM(2, 3));
// we can use this func before creation as it is not assigned to any const
function addNUM(a, b) {
  return a + b;
}
// we cnnot do
/*const add = function()
 {
    return  ......
 } Canonot use this type before declaration
 */

/////Example///

if (!numProd) allDeleted();
// this will call the function even if num prod is not false , but it is undefined here
//use const all the time while hoisting

var numProd = 10;

function allDeleted() {
  console.log("all deleted");
}
////////

//////this keyword//////

// window object
console.log(this);

const chinmay = {
  year: 1998,
  age1: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

chinmay.age1();

const matdila = {
  year: 2017,
};

//borrowing
matdila.age1 = chinmay.age1;
matdila.age1();

/*const f = chinmay.age1;
f();
*/
/////////////regular f vs arrow f ////////

const jape = {
  birth: 1998,
  name: "chinmay",
  calculate: function () {
    console.log(this);
    console.log(2022 - this.birth);
  },

  greet: () => console.log(this.name),
};
jape.greet();
