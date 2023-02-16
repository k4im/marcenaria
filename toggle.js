'use strict';

// selection in the hamburger menu
let hamburger = document.querySelector(".toggle-menu");

let toggleBar = document.querySelector(".toggle-bar");
let toggleClose = document.querySelector(".close-toggle");
let itemLink = [...document.querySelectorAll(".item__link")];

function openMenu() {
    toggleBar.classList.add("toggle-bar-active")
    toggleBar.classList.remove("toggle-bar");
}

function closeMenu() {
    toggleBar.classList.remove("toggle-bar-active")
    toggleBar.classList.add("toggle-bar");
}
//Evento para abrir o toggle menu
hamburger.addEventListener("click", openMenu);

//Evento para fechar o toggle menu
toggleClose.addEventListener("click", closeMenu);

//Evento em cada item para fechar quando clicado
itemLink.forEach(item => {
    item.addEventListener("click", closeMenu)
})