burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

const d = new Date();
let year = d.getFullYear();
document.getElementById('year').innerHTML = year;

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-res');
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})