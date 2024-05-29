import "./styles.css";
import { Menu } from "./menu";
import { About } from "./about";
import { Home } from "./home";
const header = document.querySelector("header");
const buttons = document.querySelectorAll("button");
const leftContainer = document.createElement("div");
header.appendChild(leftContainer);
const content = document.getElementById("content");
const left = document.createElement("div");
left.id = "leftContainer";
left.style.height = "auto";
const right = document.createElement("div");
right.id = "rightContainer";
right.style.height = "auto";
content.appendChild(left);
content.appendChild(right);
let child = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Home") {
      if (child) {
      right.removeChild(right.firstChild); 
      }
      right.appendChild(Home());
      child = true;
    }
    if (button.textContent === "About") {
      if (child) {
        right.removeChild(right.firstChild); 
      }
      right.appendChild(About());
      child = true;
    }
    if (button.textContent === "Menu") {
      if (child) {
      right.removeChild(right.firstChild); 
    }
      right.appendChild(Menu());
      child = true;
    }
  });
});
