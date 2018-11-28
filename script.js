let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");

let body = document.querySelector("#gradient");
function setColor (){
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}
color1.addEventListener("input",setColor);
color2.addEventListener("input", setColor);























//  let css = document.querySelector("h3");
//  let color1 = document.querySelector(".color1");
//  let color2 = document.querySelector(".color2");
//  let gradient = document.querySelector("#gradient");
//
// function setGradient(){
//   gradient.style.background = "linear-gradient(to right, "
//   + color1.value
//   + ", "
//   + color2.value
//   + ")";
//
//   css.textContent = gradient.style.background + ";" ;
// }
//
//  color1.addEventListener("input", setGradient)
//  color2.addEventListener("input", setGradient)
