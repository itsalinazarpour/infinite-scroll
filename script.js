"use strict";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const randomColor = function () {
  return Math.floor(Math.random() * 256);
};

const markup = "<hr>".repeat(2000);

const addDiv = function () {
  document.querySelector("body").innerHTML += markup;
  const lines = document.querySelectorAll("hr");

  lines.forEach((line) => {
    line.style.borderBottom = `30px solid rgba(${randomColor()},${randomColor()},${randomColor()})`;
  });
};
addDiv();

window.onscroll = function (ev) {
  console.log("hi");
  if (window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight) {
    addDiv();
  }
};
