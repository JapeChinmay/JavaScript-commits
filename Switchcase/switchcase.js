const day = prompt("Enter the day");
//taking input

switch (day) {
  case "monday": // day ==== 'monday'
    console.log("Do DSA");
    break;

  case "tuesday":
    console.log("sme");
    break;

  case "wednesday":
  case "thursday":
    console.log("DO DSA");

    break;

  case "friday":
    console.log("React.js");
    break;

  case "saturday":
    console.log("same as monday");

    break;

  case "sunday":
    console.log("enjoy weekedn");

    break;
  default:
    console.log("enter valid day");
}
