////declaring arrays

const array1 = ["chinmay", "jape", "chinmay1", "jape1"];
console.log(array1);

/// dynamic
const array2 = new Array("chinamy", "jape");
console.log(array2);

//// printing any element of array

//printing 3rd element
console.log(array1[2]);

// size of array
console.log(array2.length);
console.log(array1.length - 1);

//replacing element

array1[2] = "joy";
console.log(array1);

const chinmay = ["chinmay", "jape", 2022 - 1998, array1];
//or

const firstName = "chinmay";

chinmay[0] = firstName;
console.log(chinmay);
////////////////////////////////////////////////////////////////////////

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1998, 2022, 1879];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);
/////////////////////arrays operations//////////

///// pushing element in arrays
array1.push("jason");
console.log(array1);

const unshifted = array1.unshift("roger");
console.log(array1);
console.log(unshifted);

// remove
// remove last element
array1.pop();
console.log(array1);

array1.shift(); // remove first element
console.log(array1);

console.log(array1.indexOf("chinmay"));

console.log(array1.includes("joy"));
