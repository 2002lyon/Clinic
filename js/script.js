// ------------------- nav responsvie ----------------

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}


// --------------- nav scroll change --------------------

window.addEventListener("scroll", function () {
	var header = document.querySelector(".header");
	header.classList.toggle("sticky", window.scrollY > 100);
 })