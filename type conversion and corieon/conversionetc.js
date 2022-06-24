////converting string to num

const inputYEar = "1998";

console.log(typeof inputYEar);

// wont work
console.log(inputYEar + 18);

/// converted string type into number now

console.log(Number(inputYEar) + 18);
//ans = 2016

const name = "chinmay";
//if i convert this string into number it wont convert as it is not number type

console.log(Number(name));
//ans = NAN

////////////////////////////////////////////////////////////////////

/////// type coercion

// works whe nthere are two diffrent types of data is present

console.log(`I'm ${inputYEar} years old`);
// inputYear is convert into string

console.log("1222" - "223" - 3);
// converts strings into number "-" operator

console.log("1222" + "223" + 3);
// converts  number into string " + " operator

console.log("12" - 3 - "34"); // converted into  sub operatoin
console.log("1212" + 3 + "3434"); // converted into full string

let n = "1" + 1; // gives 11

n = n - 1; // gives 10;

console.log(n); //prints   10;
