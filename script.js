const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

    });

});