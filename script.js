"use strict";

const body = document.querySelector("body");

// random number between 0 and 255
const randomInt = function (maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
};

// create markup
let markup = "";
for (let i = 0; i <= 4000; i++) {
  const randomColor = `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(
    255
  )})`;
  markup += `<div class="line"  title="Color: ${randomColor} " style="background-color: ${randomColor}"></div>`;
}

// append murkup to body function
const addLines = () => (body.innerHTML += markup);
addLines();

// event deligation
body.addEventListener("mouseout", function (e) {
  const line = e.target.closest(".line");
  if (!line) return;

  line.innerHTML = "";
});

body.addEventListener("mouseover", function (e) {
  const line = e.target.closest(".line");
  if (!line) return;

  line.innerHTML = `&nbsp;${line.title.slice(6)}&nbsp;`;
});

// append murkup to body when user reachs to the bottom
window.addEventListener("scroll", function () {
  this.document.querySelector("h1").style.opacity = 0;
  this.setTimeout(() => {
    this.document.querySelector("h1").style.display = "none";
  }, 2000);

  if (window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight) {
    addLines();
  }
});

// bring scroll to top ot the page before reloading
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});
