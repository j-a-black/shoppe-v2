export const toggleMobileNavBtnAndMenu = () => {
  const hamburger = document.querySelector(".fas");
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link-js");
  const body = document.body;
  console.log(body);

  // Changes from hamburger to 'X'
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");

  // Toggles mobile nav menu and prevents scolling
  mobileMenu.classList.toggle("is-active");
  if (mobileMenu.classList.contains("is-active")) {
    body.classList.add("no-scrolling");
    html.classList.add("no-scrolling");
  } else {
    body.classList.remove("no-scrolling");
    html.classList.remove("no-scrolling");
  }

  // mobileMenu.classList.contains("is-active")
  //   ? (body.style.position = "fixed")
  //   : (body.style.position = "relative");

  // Closes mobile menu when link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-active");

      // Allows scrolling once menu is closed
      if (
        body.classList.contains("no-scrolling") &&
        html.classList.contains("no-scrolling")
      ) {
        body.classList.remove("no-scrolling");
        html.classList.remove("no-scrolling");
      }

      // Shows hamburger icon instead of 'X' icon
      hamburger.classList.add("fa-bars");
      hamburger.classList.remove("fa-times");
    });
  });
};
