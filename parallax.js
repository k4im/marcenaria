'use strict';

//Selecionando elementos
let heroImg = document.querySelector(".hero__img");
let heroText = document.querySelector(".hero__text");
let processImgBox = document.querySelector(".process__img-box");
let processTextBox = document.querySelector(".process__text-box");
let processImgBox2 = document.querySelector(".process__img-box-2");
let processTextBox2 = document.querySelector(".process__text-box-2");
let cardbox = document.querySelectorAll('.card-box');
//Setando valor incial do mouse
let current = 0;
//Setando valor inicial da janela
let target = 0;
// variavel que set a velocidade do scroll animation
let ease = .09;

// Função que ira gerar o scroll de maneira mais fluida
function lerp(start, end, ease) {
    return start * (1-ease) + end * ease;
};
// Função que gera o transform de cada elemento baseado no eixo Y
function transform(elemento, transformation) {
    elemento.style.transform = transformation;
};  

//animação da sessão hero 
function animateHeroSection() {
    // Setando o valor atual que estamos na tela com a função lerp fixada em duas casas
    current = parseFloat(lerp(current, target, ease)).toFixed(2); 
    
    // target será o eixo Y do scroll da janela 
    target = window.scrollY; 
    
    // Chamando a função de transform, passando o valor de transform sendo o current.
    transform(heroImg, `translateY(-${current}px)`)
    transform(heroText, `translateY(-${current}px)`)
    console.log(target);

    //Requisitando a animação;
    requestAnimationFrame(animateHeroSection);
}

function animationTrigger() {
    target = window.scrollY; 
    // Trigger de animação 
    if(target < 150) {
        processImgBox.classList.remove("animated");
        processTextBox.classList.remove("animated-left");
    }
    else if(target >= 450) {
        processImgBox.classList.add("animated");
        processTextBox.classList.add("animated-left");
    }
    requestAnimationFrame(animationTrigger);
}

function animationTrigger2() {
    target = window.scrollY; 
    // Trigger de animação 
    if(target >= 1200) {
        processImgBox2.classList.add("animated-left");
        processTextBox2.classList.add("animated");
    }
    else if(target < 1000) {
        processImgBox2.classList.remove("animated-left");
        processTextBox2.classList.remove("animated");
    }
    console.log(target);
    requestAnimationFrame(animationTrigger2);
}

function animationTriggerLoadImg() {
    target = window.scrollY; 
    // Trigger de animação 
    if(target >= 1700) {
        cardbox.forEach(card => {
            card.classList.add('animated-load')
        });
    }
    else if(target < 1000) {
        cardbox.forEach(card => {
            card.classList.remove('animated-load')
        });
    }
    requestAnimationFrame(animationTriggerLoadImg);
}



animateHeroSection();
animationTrigger();
animationTrigger2();
animationTriggerLoadImg();
