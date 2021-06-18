const mobileHamburgerMenu = document.querySelector(".mobile-burger-menu");
const navigationLinks = document.querySelector(".nav-links");
mobileHamburgerMenu.addEventListener("click", () => {
  navigationLinks.classList.toggle("nav-links-open");
});
