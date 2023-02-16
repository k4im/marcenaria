'use strict';

let detailBtn = [...document.querySelectorAll(".button")];
let detailBox = document.getElementById("detailbox");
let closeBtn = document.getElementById("closeBtn");

function detailBoxShow() {
    detailBox.style.display ="block";
}

function closeDetailBox() {
    detailBox.style.display="none";
}

// Adicionando para cada botão um EventListener
detailBtn.forEach(button => {
    button.addEventListener("click", detailBoxShow)
});

// Adicionando um eventListener para fechar
closeBtn.addEventListener("click", closeDetailBox);

//Evento Listener para Escape
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeDetailBox();
});