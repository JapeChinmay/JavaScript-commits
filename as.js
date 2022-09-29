// // "use strict";

// // const btn = document.querySelector(".btn-country");
// // const countriesContainer = document.querySelector(".countries");

// // ///////////////////////////////////////

// // const request = new XMLHttpRequest();
// // request.open('GET', '')

// const request = fetch("https://api.themoviedb.org/3/");

// try {
//   request.then((el) =>
//     el.json().then((el) =>
//       el.forEach((element) => {
//         console.log(element.status_message);
//       })
//     )
//   );
//   request.then((m) => m.json().then((el) => console.log("el:", el)));
// } catch {
//   request.catch((err) => console.log(err));
// }
