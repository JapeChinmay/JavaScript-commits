"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (startIndex, mainIndex, time, address) {
    console.log(`Order reached , ${this.starterMenu[startIndex]}, and
    ${this.mainMenu[mainIndex]},will be delivered to ${address}, at ${time}
    `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function (mainIng, ...othering) {
    console.log(mainIng);
    console.log(othering);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  startIndex: 1,
  mainIndex: 2,
  time: "22.22",
  address: "jalna",
});

///////////////////////////////////////

const chinmay = {
  firstName: "chinmay",
  location1: "aurangabad",
  job: "software engg",
  genger: "Male",

  workTime: {
    mon: {
      startingtime: 1,
      closingtime: 4,
    },
    tue: {
      startingtime: 1,
      closingtime: 4,
    },
    wed: {
      startingtime: 1,
      closingtime: 4,
    },
  },
};
/*
const { firstName, location1, job, gender } = chinmay;
console.log(firstName, location1, job, gender);

const { firstName: petName, location1: home, gender: maleorfemale } = chinmay;
console.log(petName, home, maleorfemale);

///////////////////////////////////////////////////////////////////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//// destructuring object in an object and assign them new notations
const {
  fri: { open: o, close: c1 },
} = openingHours;
console.log(o, c1);

//mutating
let a1 = 1111;
let b1 = 5656;
const obj = { a: 23, b: 7, c: 56 };

({ a1, b1 } = obj);
console.log(a1, b1);

///////////////////////////////////////////////////
//manual way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//destructuring

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
//skip middle element if u want diff combo

console.log(main, secondary);
// switchingvalues
[main, secondary] = [secondary, main];
console.log(main, secondary);

// got the values from function
const [starter, main1] = restaurant.order(2, 2);
console.log(starter, main1);

const nested = [2, 4, [5, 6]];
const [i, , [j, t]] = nested;
console.log(i, j, t);
*/

/////////////////////////////

// spread operator

const badarr = [1, 2, 3];
const newarr = [3, 4, 2, ...badarr];
console.log(...newarr);

const newMenu = ["pasta", "sauce", ...restaurant.mainMenu];
console.log(...newMenu);

const str = "chinmay";
const str1 = [...str, "g"];
console.log(str1);

////////////////////////////////////////////////////

const ingridients = [
  prompt("give ing1 for pasta"),
  prompt("giveing 2"),
  prompt(" give ing3"),
];

restaurant.orderPasta(...ingridients);

const newRestaurent = { ...restaurant, founder: "chinmay" };
console.log(newRestaurent);

//////////// rest pattern
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 4, 3);

restaurant.orderPizza("olive", "spinach", "onion");
restaurant.orderPizza("onion");
