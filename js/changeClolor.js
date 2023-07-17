// //select icon toggle-gear
// const toggleGear = document.querySelector(".settings .fa-gear");

// //select settings div
// const settingsDiv = document.querySelector(".settings");

// //toggle bar on clicking
// toggleGear.addEventListener("click", () => {
//   // toggle spin on clicling
//   toggleGear.classList.toggle("fa-spin");

//   //toggling settings section on clicking
//   settingsDiv.classList.toggle("remove");
// });

// //select colors span
// const colorSpans = document.querySelectorAll(
//   ".settings .settings-content span "
// );

// //select root element
// const rootElement = document.querySelector(":root");

// // fetch the main color from local storage when reload
// const mainColorFromLocalStorage = localStorage.getItem("main-color");

// if (mainColorFromLocalStorage) {
//   // set the color
//   rootElement.style.setProperty("--main-color", mainColorFromLocalStorage);

//   //remove default active
//   colorSpans[1].classList.remove("active");

//   //set class active to the span that contains the main color
//   for (const span of colorSpans) {
//     if (mainColorFromLocalStorage === span.dataset.color) {
//       span.classList.add("active");
//     }
//   }
// }

// for (const span of colorSpans) {
//   //add its color to main-color on clicking
//   span.addEventListener("click", () => {
//     //add the spanColor
//     rootElement.style.setProperty("--main-color", span.dataset.color);

//     //set the color to the local storage
//     localStorage.setItem("main-color", span.dataset.color);

//     //add class active to the clicked span and remove from all
//     for (const span of colorSpans) {
//       if (span.classList.contains("active")) span.classList.remove("active");
//     }
//     span.classList.add("active");
//   });
// }