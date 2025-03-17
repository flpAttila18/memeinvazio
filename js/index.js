const btnlogin = document.getElementsByClassName("login")[0];
const btnreg = document.getElementsByClassName("reg")[0];


btnlogin.addEventListener('click', ()=>{
    window.location.href='../html/login.html';
})

btnreg.addEventListener('click', ()=>{
    window.location.href='../html/registration.html';
})