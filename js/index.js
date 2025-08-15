const navToggle = document.getElementById("menuOpen");    // hamburger icon
const navMenu = document.getElementById("mymenu");        // nav menu
const navClose = document.getElementById("menu-close");   // close icon

// Toggle open when hamburger is clicked
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("openMenu");
});

// Toggle close when close icon is clicked
navClose.addEventListener("click", () => {
  navMenu.classList.remove("openMenu");
});

// Close menu when any link inside nav is clicked
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("openMenu");
  });
});



