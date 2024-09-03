document.querySelector(".bars__menu").addEventListener("click", animateBars);

document.querySelector(".bars__menu").addEventListener("click", abrirCerrarMenu);

var line1__bars = document.querySelector(".line1__bars-menu");

var line2__bars = document.querySelector(".line2__bars-menu");

var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeLine1__bars-menu");
    line2__bars.classList.toggle("activeLine2__bars-menu");
    line3__bars.classList.toggle("activeLine3__bars-menu");
}

var nav = document.querySelector(".nav");

function abrirCerrarMenu() {
    nav.classList.toggle("menu");
}