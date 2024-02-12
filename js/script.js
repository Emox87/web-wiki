"use strict";

const root = document.querySelector(":root");
let cssVar = getComputedStyle(root);

// Targeting section elements
const sidebar = document.getElementById("sidebar");
const links = sidebar.children;

const htmlSection = document.getElementById("html");
const cssSection = document.getElementById("css");
const jsSection = document.getElementById("js");
const reactSection = document.getElementById("react");
const nodeSection = document.getElementById("node");
const mongodbSection = document.getElementById("mongodb");
const sections = document.getElementsByTagName("section");

function isVisible(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove("active");
    }
    links[i].classList.add("active");
  });
}

window.addEventListener("scroll", () => {
  for (let section of sections) {
    if (isVisible(section)) {
      document.getElementById(section.id).classList.toggle("active");
    }
  }
});
