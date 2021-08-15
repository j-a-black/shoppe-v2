import { cartArr } from "./data.js";
import { displayCart } from "./displayCart.js";

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
// Adding product to shopping cart
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
  displayCart();
};
