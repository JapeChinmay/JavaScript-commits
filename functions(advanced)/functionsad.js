"use strict";

const bookings = [];

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
