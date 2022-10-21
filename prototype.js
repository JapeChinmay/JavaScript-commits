'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// creating methood with protoype.

Person.prototype.calcAge = function () {
  console.log(`My age is ${2022 - this.birthYear}`);
};

const Student = function (firstName, birthYear, takenCourse) {
  // calling person here. as two properties are same.
  Person.call(this, firstName, birthYear);
  this.takenCourse = takenCourse;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and I study ${this.takenCourse}`);
};

const chinmay = new Student('cj', 1997, 'CS');
console.log(chinmay);
chinmay.intro();
chinmay.calcAge();

// // empty obj is created.
// // this is set to new obj which was created.
// // new obj is linked to prototype.
// // function automatically  returns the obj.

// const obj = new Person('chinmay', 1998);
// const obj2 = new Person('jesssica', 1997);
// console.log(obj);
// console.log(obj2);

// obj.calcAge();
// obj2.calcAge();

// console.log(obj.__proto__, obj instanceof Person);
// // obj is instance of  person. (constructor function)

// // classes.
class PersonCl {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`My name is ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }
  // setting property which already exits
  set fullname(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert('wrong name');
  }

  get fullname() {
    return this._fullname;
  }
}

PersonCl.prototype.greet = function () {
  console.log(`hi this is ${this.firstName}`);
};
const jessica = new PersonCl('jesssica davis', 1997);
console.log(jessica);
jessica.calcAge();
jessica.greet();
console.log(jessica.age);

const walter = new PersonCl('walter issacson', 1998);

/////////////////////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(`My name is ${this.firstName}`);
  },
};

const stevan = Object.create(PersonProto);
const sarah = Object.create(PersonProto);

console.log(stevan);
stevan.firstName = 'Stevan';
stevan.birthYear = 1996;
stevan.calcAge();
