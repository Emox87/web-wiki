"use strict";

const root = document.querySelector(":root");
let cssVar = getComputedStyle(root);

// Targeting section elements
const sidebar = document.getElementById("sidebar");
const htmlSection = document.getElementById("html");
const cssSection = document.getElementById("css");
const jsSection = document.getElementById("js");
const reactSection = document.getElementById("react");
const nodeSection = document.getElementById("node");
const mongodbSection = document.getElementById("mongodb");

// sidebar links
const htmlLink = sidebar.children.item(0);
const cssLink = sidebar.children.item(1);
const jsLink = sidebar.children.item(2);
const reactLink = sidebar.children.item(3);
const nodeLink = sidebar.children.item(4);
const mongoLink = sidebar.children.item(5);

// Scrolling positions
const htmlSectionEnd = htmlSection.offsetHeight + htmlSection.offsetTop;
const cssSectionEnd = cssSection.offsetHeight + cssSection.offsetTop;
const jsSectionEnd = jsSection.offsetHeight + jsSection.offsetTop;
const reactSectionEnd = reactSection.offsetHeight + reactSection.offsetTop;
const nodeSectionEend = nodeSection.offsetHeight + nodeSection.offsetTop;
const mongoSectionEnd = mongodbSection.offsetHeight + mongodbSection.offsetTop;

// Removes all active links
function removeActiveLink() {
  for (let a of sidebar.children) {
    if (a.classList.contains("active")) {
      a.classList.remove("active");
    }
  }
}

// Set an active link
function setActiveLink(link) {
  removeActiveLink();
  link.classList.add("active");
}

window.onscroll = function () {
  console.log(this.scrollY);
};

// window.addEventListener("scroll", function () {
//   if (
//     (this.scrollY >= 0 && this.scrollY < htmlSectionEnd) ||
//     this.location.hash.includes("html")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-html-color")
//     );
//     setActiveLink(htmlLink);
//   } else if (
//     (this.scrollY >= cssSection.offsetTop && this.scrollY < cssSectionEnd) ||
//     this.location.hash.includes("css")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-css-color")
//     );
//     setActiveLink(cssLink);
//   } else if (
//     (this.scrollY >= jsSection.offsetTop && this.scrollY < jsSectionEnd) ||
//     this.location.hash.includes("js")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-js-color")
//     );
//     setActiveLink(jsLink);
//   } else if (
//     (this.scrollY >= reactSection.offsetTop &&
//       this.scrollY < reactSectionEnd) ||
//     this.location.hash.includes("react")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-react-color")
//     );
//     setActiveLink(reactLink);
//   } else if (
//     (this.scrollY >= nodeSection.offsetTop && this.scrollY < nodeSectionEend) ||
//     this.location.hash.includes("node")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-node-color")
//     );
//     setActiveLink(nodeLink);
//   } else if (
//     (this.scrollY >= mongodbSection.offsetTop &&
//       this.scrollY >= mongoSectionEnd) ||
//     this.location.hash.includes("mongodb")
//   ) {
//     removeActiveLink();
//     // Set css variable value
//     root.style.setProperty(
//       "--sidebar-active-link-background-color",
//       cssVar.getPropertyValue("--section-mongodb-color")
//     );
//     setActiveLink(mongoLink);
//   }
// });

console.log(typeof location.hash);
// Document Loaded
// window.onload = () => {
//   console.log("Document loaded");
//   // Set active link on the sidebar def to html
//   sidebar.children.item(0).classList.add("active");
// };

// console.log(sidebar.children);
// console.log(htmlSection.children.item(0).children.item(0).innerText);
// const cssObject = window.getComputedStyle(sidebar.children.item(0), null);
// console.log(cssObject.getPropertyValue("color"));

// for (const link of sidebar.children) {
//   link.addEventListener("click", function () {
//     alert(`Clicked on ${link.innerHTML}`);
//   });
// }
