const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links ul');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const body = document.querySelector('body');
const dropDown1 = document.querySelector('.dropdown');
const dropDown2 = document.querySelector('#join-drop');


burger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    burger.classList.toggle("burg-open");
    line1.classList.toggle("open");
    line2.classList.toggle("open");
    line3.classList.toggle("open");
});

dropDown1.addEventListener('click', () => {
    dropDown1.classList.toggle("activate-drop")
    
});

dropDown2.addEventListener('click', () => {
    dropDown2.classList.toggle("activate-drop")
    
});