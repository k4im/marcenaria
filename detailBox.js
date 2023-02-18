'use strict';

let detailBtn = [...document.querySelectorAll(".button")];
let detailBox = document.getElementById("detailbox");
let closeBtn = document.getElementById("closeBtn");
let containerBox = document.querySelector(".container__box");
function detailBoxShow() {
    detailBox.style.display ="block";
    containerBox.style.display="block";
    containerBox.style.visibility ="visible";
}

function closeDetailBox() {
    detailBox.style.display="none";
    containerBox.style.display="none";
    containerBox.style.visibility ="hidden";
}

// Adicionando para cada botão um EventListener
detailBtn.forEach(button => {
    button.addEventListener("click", detailBoxShow)
});

// Adicionando um eventListener para fechar
closeBtn.addEventListener("click", closeDetailBox);

detailBox.addEventListener("click", closeDetailBox)

//Evento Listener para Escape
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeDetailBox();
});