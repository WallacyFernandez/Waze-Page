document.querySelector(".conteiner").style.opacity = 1;

const logregBox = document.querySelector('.logreg-box');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {


    logregBox.classList.add('active')

});

loginlink.addEventListener('click', () => {


    logregBox.classList.remove('active')

});