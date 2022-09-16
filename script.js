"use strict";
// random number between 0 and 255
const randomRGB = function () {
  return Math.floor(Math.random() * 256);
};

// create markup
let markup = "";
for (let i = 0; i <= 2000; i++) {
  markup += `<hr style="border-bottom: 30px solid rgb(${randomRGB()},${randomRGB()},${randomRGB()})">`;
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
