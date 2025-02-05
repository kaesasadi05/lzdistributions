// main.js

// Navbar background change on scroll
document.addEventListener("scroll", function() {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 100) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
});
