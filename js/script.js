const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let dropdownMenu = document.querySelector(".dropdown-menu");

menu.onclick = function() {
    menu.classList.toggle('bx-x');
    // navbar.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    // navbar.classList.remove('open');
    dropdownMenu.classList.remove('open');

}