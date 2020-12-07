let menu = document.querySelector(".hamburger-label");
let topLine = document.getElementById("top-line");
let middleLine = document.getElementById("middle-line");
let bottomLine = document.getElementById("bottom-line");
//  console.log(menu, topLine, middleLine, bottomLine)

menu.onclick = function() {
  topLine.classList.toggle("clicked-top-line");
  middleLine.classList.toggle("clicked-middle-line");
  bottomLine.classList.toggle("clicked-bottom-line");
}