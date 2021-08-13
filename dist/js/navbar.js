export const toggleMobileNavBtnAndMenu = () => {
  const hamburger = document.querySelector(".fas");
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link-js");
  const body = document.body;

  // Changes from hamburger to 'X'
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");

  // Toggles mobile nav menu and prevents scolling
  mobileMenu.classList.toggle("is-active");
  mobileMenu.classList.contains("is-active")
    ? (body.style.position = "fixed")
    : (body.style.position = "relative");

  // Closes mobile menu when link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-active");

      // Allows scrolling once menue is closed
      if (body.style.position === "fixed") body.style.position = "relative";

      // Shows hamburger icon instead of 'X' icon
      hamburger.classList.add("fa-bars");
      hamburger.classList.remove("fa-times");
    });
  });
};
