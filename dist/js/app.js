"use strict";

import { data } from "./data.js";
import { displayProductsInDOM, addToCartBtnClicked } from "./products.js";
import { toggleMobileNavBtnAndMenu } from "./navbar.js";
import {
  openShoppingCart,
  closeShoppingCart,
  pressEscToCloseCart,
  handleCartChange,
  removeProductBtnClicked,
  clearCartAfterPurchase,
} from "./modal.js";

// Wait until DOM is loaded before starting app
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  const cards = document.querySelector(".cards");
  if (cards) {
    displayProductsInDOM(data);
    // Event delegation for dynamically created products
    const gridDiv = document.querySelector(".cards");
    gridDiv.addEventListener("click", addToCartBtnClicked);
    // close button on modal/checkout window
    const closeShoppingCartBtn = document.querySelector(".close-btn");
    closeShoppingCartBtn.addEventListener("click", closeShoppingCart);
    // listens for changes in input field
    const cartDisplay = document.querySelector(".products-js");
    cartDisplay.addEventListener("change", handleCartChange);
    // Removes item from cart
    const products = document.querySelector(".products-js");
    products.addEventListener("click", removeProductBtnClicked);
    // clear cart when purchase btn is clicked
    const purchaseBtn = document.querySelector(".purchase-js");
    purchaseBtn.addEventListener("click", clearCartAfterPurchase);
    // click on overlay to close checkout window/modal
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", closeShoppingCart);
    pressEscToCloseCart();
  }
  // Mobile nav button to open/close mobile menu
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleMobileNavBtnAndMenu);
  // Click on cart icon to open/close checkout window
  const shoppingCartBtns = document.querySelectorAll(".shopping-cart-button");
  shoppingCartBtns.forEach((btn) => {
    btn.addEventListener("click", openShoppingCart);
  });
}
