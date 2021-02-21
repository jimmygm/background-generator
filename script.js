var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var randomColor = document.querySelector("#randomColor");
var css = document.querySelector("h3");

function getRandomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

function setRandomColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

function setGradient() {
  body.style[
    "background"
  ] = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  css.textContent = body.style.background;
  console.log(color1.value);
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", setRandomColor);
