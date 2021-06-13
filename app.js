const icon = document.querySelector(".ham-icon");
const nav = document.querySelector("nav");

icon.addEventListener("click" , function(){
    nav.classList.toggle("fullnav")
})