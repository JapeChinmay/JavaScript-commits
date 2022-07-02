"use strict";

/*const bookings = [];

const createBookings = function (flightNum, numPass, price) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};
createBookings("KKFKF", "1211212", "1211212");
createBookings("dffd", "2121212", "32323");

console.log(...bookings);
*/

////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn, fn2) {
  console.log(`Transformed string is:  ${fn(str)}`);
  console.log(`one word func ${fn2(str)}`);
};

transformer("chinmay is jape", upperFirstWord, oneWord);

///////////functions returning functions///

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterWelcome = greet("welcome");
greeterWelcome("chinmay");

////call and apply method//

const IndianAirways = {
  airline: "Indian Airways",
  iataCode: "IA",
  bookkings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookkings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
  },
};

IndianAirways.book("11212", "chinmay");
IndianAirways.book("ddsd", "jape");

const hindAirways = {
  airline: "hindAirways",
  iataCode: "hind",
  bookkings: [],
};

const book = IndianAirways.book;
book.call(hindAirways, "223", "chinmay");
book.call(IndianAirways, "344", "fdf");

console.log(IndianAirways);
