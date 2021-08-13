"use strict";

import { data } from "./data.js";
import { render, handleClick } from "./products.js";
import { toggleMobileNavBtnAndMenu } from "./navbar.js";
import {
  openShoppingCart,
  closeShoppingCart,
  pressEscToCloseCart,
} from "./modal.js";

// Wait until DOM is loaded before starting app
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  render(data);
  // Event delegation for dynamically created products
  const gridDiv = document.querySelector(".cards");
  gridDiv.addEventListener("click", handleClick);
  // Mobile nav button to open/close mobile menu
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleMobileNavBtnAndMenu);
  // Click on cart icon to open/close checkout window
  const shoppingCartBtns = document.querySelectorAll(".shopping-cart-button");
  shoppingCartBtns.forEach((btn) => {
    btn.addEventListener("click", openShoppingCart);
  });
  // close button on modal/checkout window
  const closeShoppingCartBtn = document.querySelector(".close-btn");
  closeShoppingCartBtn.addEventListener("click", closeShoppingCart);
  // click on overlay to close checkout window/modal
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", closeShoppingCart);
  pressEscToCloseCart();
}
