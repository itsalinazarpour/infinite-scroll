"use strict";
// random number between 0 and 255
const randomRGB = function () {
  return Math.floor(Math.random() * 256);
};

// create markup
let markup = "";
for (let i = 0; i <= 2000; i++) {
  const randomColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  markup += `<div class="line" onmouseout="this.innerHTML = '', false" onmouseover="this.innerHTML = '${randomColor}'" title="Color: ${randomColor}" style="background-color: ${randomColor}"></div>`;
}

// append murkup to body function
const addLines = function () {
  document.querySelector("body").innerHTML += markup;
};
addLines();

// append murkup to body when user reachs to the bottom
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight) {
    addLines();
  }
};

// bring scroll to top ot the page before reloading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
