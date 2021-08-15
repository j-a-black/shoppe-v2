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
  const totalPriceElement = document.querySelector(".total__price-js");
  const cartIconQtyDisplay = document.querySelectorAll(
    ".small-circle-quantity"
  );
  let total = 0;
  let totalQty = 0;
  cartArr.forEach((item) => {
    total += item.productQty * item.productPrice;
    totalQty += item.productQty;
  });
  totalPriceElement.innerText = total.toFixed(2);
  cartIconQtyDisplay.forEach((el) => (el.innerText = totalQty));
};

export const removeProductBtnClicked = (e) => {
  let btnId = e.target.id;
  for (let i = cartArr.length - 1; i >= 0; i--) {
    if (cartArr[i].productId === btnId) {
      cartArr.splice(i, 1);
    }
  }
  console.log(cartArr);
  displayCart(cartArr);
};

const displayCart = (arr) => {
  let html = "";
  arr.forEach((el) => {
    html += `
      <article id=${el.productId} class="modal__item">
        <div class="modal__figure">
          <img src="${el.productImageSrc}" alt="${el.productName}">
        </div>
        <div class="modal__body">
          <span class="modal__product-name">${el.productName}</span>
          <span class="modal__product-price">$${el.productPrice}</span>
          <div class="modal__qty-btn-container">
            <input class="modal__input-qty" type="number" value="${el.productQty}" min="1" max="50">
            <span><button id=${el.productId} class="close-btn item-js">&times;</button></span>
          </div>
        </div>
      </article>
  `;
  });

  products.innerHTML = html;
  console.log(cartArr);
  updateTotalPrice();
};
