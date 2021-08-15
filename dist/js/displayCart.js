import { cartArr } from "./data.js";
import { updateTotalPrice } from "./updateTotalPrice.js";

const products = document.querySelector(".products-js");
export const displayCart = () => {
  let html = "";
  cartArr.forEach((el) => {
    html += `
        <article id=${el.productId} class="modal__item">
          <div class="modal__figure">
            <img src="${el.productImageSrc}" alt="${el.productName}">
          </div>
          <div class="modal__body">
            <span class="modal__product-name">${el.productName}</span>
            <span class="modal__product-price">$${el.productPrice}</span>
            <div class="modal__qty-btn-container">
              <span>Qty: </span><input class="modal__input-qty" type="number" value="${el.productQty}" min="1" max="50">
              <span><button id=${el.productId} class="close-btn item-js">&times;</button></span>
            </div>
          </div>
        </article>
    `;
  });

  products.innerHTML = html;
  const emptyCartMsg = document.querySelector(".cart-empty-message");
  if (cartArr.length) {
    emptyCartMsg.style.display = "none";
  } else {
    emptyCartMsg.style.display = "block";
  }
  console.log(cartArr);
  updateTotalPrice();
};

// const updateTotalPrice = () => {
//   const totalPriceElement = document.querySelector(".total__price-js");
//   const cartIconQtyDisplay = document.querySelectorAll(
//     ".small-circle-quantity"
//   );
//   let total = 0;
//   let totalQty = 0;
//   cartArr.forEach((item) => {
//     total += item.productQty * item.productPrice;
//     totalQty += item.productQty;
//   });
//   totalPriceElement.innerText = total.toFixed(2);
//   cartIconQtyDisplay.forEach((el) => (el.innerText = totalQty));
// };
