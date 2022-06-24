const age = 12;

const isEnough = age >= 18;

if (isEnough) {
  console.log("yes");
} else {
  const years = 18 - age;

  console.log(`no , wait for ${years} years`);
}

/////////// string literals in ifelse

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  let century = 20;
  console.log(`You  were born in ${century}th century`);
} else {
  let century = 21;
  console.log(`you were born in ${century}st century`);
}
