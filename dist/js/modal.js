import { cartArr } from "./data.js";
import { displayCart } from "./displayCart.js";
import { updateTotalPrice } from "./updateTotalPrice.js";

const shoppingCart = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

/*
 * Used toggle instead of add b/c in mobile view, user has bottom navigation with
 * shopping cart button available. Want users to be able to open and close shopping cart
 * by clicking the shopping cart icon/button
 */
export const openShoppingCart = () => {
  shoppingCart.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

export const closeShoppingCart = () => {
  shoppingCart.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const pressEscToCloseCart = () => {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !shoppingCart.classList.contains("hidden")) {
      closeShoppingCart();
    }
  });
};

export const handleCartChange = (e) => {
  if (e.target.classList.contains("modal__input-qty")) {
    let qtyElement = e.target;
    let updatedQtyValue = parseInt(qtyElement.value);
    let idDiv = qtyElement.parentElement.parentElement.parentElement;
    cartArr.forEach((item) => {
      if (idDiv.getAttribute("id") === item.productId) {
        item.productQty = updatedQtyValue;
      }
    });
  }
  updateTotalPrice();
};

export const removeProductBtnClicked = (e) => {
  let btnId = e.target.id;
  for (let i = cartArr.length - 1; i >= 0; i--) {
    if (cartArr[i].productId === btnId) {
      cartArr.splice(i, 1);
      displayCart();
    }
  }
};

export const clearCartAfterPurchase = () => {
  cartArr.length = 0;
  displayCart();
  alert("Thank you for your purchase!");
};
