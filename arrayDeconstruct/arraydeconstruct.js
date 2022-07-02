"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //es6 object literal

  openingHours,
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
};

restaurant.orderDelivery({
  startIndex: 1,
  mainIndex: 2,
  time: "22.22",
  address: "jalna",
});

///////////////////////////////////////

const workTime = {
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
};
const chinmay = {
  firstName: "chinmay",
  location1: "aurangabad",
  job: "software engg",
  genger: "Male",
  workTime,
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
/*
const ingridients = [
  prompt("give ing1 for pasta"),
  prompt("giveing 2"),
  prompt(" give ing3"),
];

restaurant.orderPasta(...ingridients);
*/

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

/////////////////////////////////////////////////////

const entireMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of entireMenu) console.log(item);
for (const [i, e] of entireMenu.entries()) {
  console.log(`${i + 1} : ${e}`);
}

console.log([...entireMenu.entries()]);

////////////////////////////////////////////

//optional chaining

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//with chaining

console.log(restaurant.openingHours?.mon?.open ?? "doses not open");
console.log(chinmay.workTime?.mon?.open);

const userArray = [{ name: "chinmay", email: "chinmay.jape2@gmail.com" }];
console.log(userArray[0]?.name ?? "empty");

////////////set

const orderSet = new Set(["chinmay", "jape", "chinmay"]);
console.log(orderSet);
console.log(new Set(["kkk"]));

console.log(orderSet.size);
console.log(orderSet.has("chinmay"));
orderSet.add("jalna");
orderSet.delete("jape");

console.log(orderSet);

for (const order of orderSet) console.log(order);

////Example////

const staff = ["waiter", "chef", "waiter", "manager", "chef"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.length);
console.log(new Set("chinmay"));

///////////MAPS///////////

const rest = new Map();

rest.set("name", "spicyheaven");
rest.set(1, "Italy");
rest.set(2, " india");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "we are closed");

console.log(rest.get("categories"));
console.log(rest.get("name"));
console.log(rest.get(1));

const time = prompt("enter time");
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("house"));
rest.delete(2);

const arr = [1, 2];

rest.set(arr, "Test");
console.log(rest);
console.log(rest.get(arr));
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

const setOfQuestions = new Map();

setOfQuestions
  .set("question", "Which is the best lang in the world")
  .set(1, "c")
  .set(2, "java")
  .set(3, "javascript")
  .set(4, "python")
  .set("correct", 3)
  .set(true, "correct ans")
  .set(false, "try again");

console.log(setOfQuestions.get("question"));

for (const [key, value] of setOfQuestions) {
  if (typeof key === "number") console.log(`ans ${key}: ${value}`);
}

const answer = Number(prompt("ypur ans"));
console.log(answer);
console.log(setOfQuestions.get(setOfQuestions.get("correct") === answer));
