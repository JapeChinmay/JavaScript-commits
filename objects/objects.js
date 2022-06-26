"use strict";

/// Creation of objects
//objects has key value pairs

const chinmay = {
  firstName: "chinmay",
  lastName: "Jape",
  age: "23",
  job: "Full Stack Developer",
  hasDriverlic: true,

  // we are not supposed to give any argument in function , we can use this keyword here
  /*calcBirthYear: function () {
    return 2022 - this.age;
  },*/

  calcBirthYear: function () {
    this.birthyear = 2022 - this.age;
    return this.birthyear;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcBirthYear()} years old and he has ${
      this.hasDriverlic
    }`;
  },
};

console.log(chinmay.firstName, chinmay.age, chinmay.job, chinmay.lastName);

console.log(chinmay);
const nameKey = "Name";

const intrestedin = prompt("what do you want to know about chinamy");

if (chinmay[intrestedin]) {
  console.log(intrestedin);
} else {
  console.log("Please fill correct value");
}

chinmay.location = "aurangabad";
chinmay["instagram"] = "@chinmayajpe";
chinmay.twiiter = "@japechinmay";

console.log(chinmay);

console.log(
  `${chinmay.firstName} has job of ${chinmay.job} and he is ${chinmay.age} years old`
);

// fetching the age from object

console.log(chinmay.calcBirthYear());

//console.log(birthyear);
console.log(chinmay.getSummary());
