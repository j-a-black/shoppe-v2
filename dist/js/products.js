import { cartArr } from "./data.js";

export const displayProductsInDOM = (data) => {
  let cards = document.querySelector(".cards");

  data.forEach((data) => {
    let html = "";
    html = `
      <article id="${data.id}" class="card">
        <div class="card__figure">
          <img
            src="${data.img}"
            alt="${data.title}"
          />
        </div>
        <div class="card__body">
          <span class="card__title">${data.title}</span>
          <span class="card__price-js">$${data.price}</span>
          <button class="btn add-to-cart-js">Add To Cart</button>
          <span style="display: none;" class="item-qty-js">${data.qty}</span>
        </div>
      </article>
  `;
    cards.insertAdjacentHTML("beforeend", html);
  });
};

// let cartArr = [];
export const addToCartBtnClicked = (e) => {
  let button = e.target;
  let product = button.parentElement.parentElement;
  let productId = product.getAttribute("id");
  let productImageSrc = product.querySelector("img").src;
  let productName = product.querySelector(".card__title").innerText;
  let productPrice = product
    .querySelector(".card__price-js")
    .innerText.slice(1);
  productPrice = parseFloat(productPrice);
  let productQty = product.querySelector(".item-qty-js").innerText;
  productQty = parseInt(productQty);
  if (e.target.className === "btn add-to-cart-js") {
    addToCartArr(
      productId,
      productImageSrc,
      productName,
      productPrice,
      productQty
    );
  }
};

// helper
let Item = function (
  productId,
  productImageSrc,
  productName,
  productPrice,
  productQty
) {
  this.productId = productId;
  this.productImageSrc = productImageSrc;
  this.productName = productName;
  this.productPrice = productPrice;
  this.productQty = productQty;
};
const addToCartArr = (
  productId,
  productImageSrc,
  productName,
  productPrice,
  productQty
) => {
  let foundItem = cartArr.some((el) => el.productId === productId);
  // if not found, then push object into array

  if (!foundItem) {
    let item = new Item(
      productId,
      productImageSrc,
      productName,
      productPrice,
      productQty
    );

    cartArr.push(item);
  }
  displayCart(cartArr);
};

// helper func: updateCartDisplay
const products = document.querySelector(".products-js");
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
            <input id=${el.productId} class="modal__input-qty" type="number" value="${el.productQty}" min="1" max="50">
            <span><button class="close-btn item-js">&times;</button></span>
          </div>
        </div>
      </article>
  `;
  });

  products.innerHTML = html;
  console.log(cartArr);
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
