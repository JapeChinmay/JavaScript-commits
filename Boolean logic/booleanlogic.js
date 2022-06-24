const hasDriverlic = true;
const hasGoodVision = true;

console.log(hasDriverlic && hasGoodVision);

const goodDriver = true;
const goodListner = false;

console.log(goodDriver && goodListner);
console.log(goodDriver || goodListner);
console.log(!goodDriver || goodListner);
console.log(goodDriver && !goodListner);

////// AND //////////////////////////////////////////////

const shouldDrive = hasDriverlic && !hasGoodVision;

if (shouldDrive) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

const isTired = true;

if (shouldDrive && isTired) {
  console.log("keep driving");
} else {
  console.log("stop driving");
}

//////// OR///////////////////////////////////////////////////

const shouldDrive1 = hasDriverlic || hasGoodVision;

if (shouldDrive1) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

const isTired1 = true;

if (shouldDrive1 || isTired1) {
  console.log("keep driving");
} else {
  console.log("stop driving");
}
