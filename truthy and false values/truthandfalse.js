/////////truthy and falsey values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("chinmay"));
console.log(Boolean({}));

//////////////////////Equaliy operators
/// "=", '==', '==='

const age = "18";
//// strictly equal operator
/// does not perform type ocercion for checking

if (age === 18) console.log(`adult`);
else {
  console.log(`notadult`);
  // notadult will be printed as age = '18' is string but age=== 18 is number
}

// lose
if (age == 18) console.log(`adult1`);
else {
  console.log(`notadult`);
}

// we will print adult1 , as it is loosely equal operator , above we are usng strict operator

const favNum = prompt("what is your fav number");
console.log(favNum);
// printed as a string

if (favNum == 121) {
  console.log(` ${favNum} is best number`);
}

//  FavNUm is taken as a string from user put  in if statement , we are uisng 121 as a number , with == operator so it will give us true in return
// here we are using "===" strict operator so even if number is 133 we will print else part as 133 in promt is returned as a string
if (favNum === 133) {
  console.log(`${favNum} is great num`);
} else {
  console.log(
    " if u have put 133 but still saw this printed then u know you have taken '===' as operator"
  );
}
/// we need to use "Number" in front of prompt

const name = "chinmay";

const NUM2 = Number(prompt(`Hey, ${name}enter your fav number`));

if (NUM2 === 133) {
  console.log("yaay");
}
