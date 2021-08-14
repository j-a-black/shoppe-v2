import { cartArr } from "./data.js";

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

const products = document.querySelector(".products-js");
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

const updateTotalPrice = () => {
  // let totalPriceElements = products.querySelectorAll(".modal__input-qty");
  // totalPriceElements.forEach((el) => console.log(el));
  const totalPriceElement = document.querySelector(".total__price-js");
  let total = 0;
  cartArr.forEach((item) => {
    total += item.productQty * item.productPrice;
  });
  totalPriceElement.innerText = total.toFixed(2);
};
