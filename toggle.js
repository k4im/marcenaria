'use strict';

// selection in the hamburger menu
let hamburger = document.querySelector(".toggle-menu");

let toggleBar = document.querySelector(".toggle-bar");
let toggleClose = document.querySelector(".close-toggle");

hamburger.addEventListener("click", () => {
    toggleBar.classList.add("toggle-bar-active")
    toggleBar.classList.remove("toggle-bar");
})

toggleClose.addEventListener("click", () => {
    toggleBar.classList.remove("toggle-bar-active")
    toggleBar.classList.add("toggle-bar");
})