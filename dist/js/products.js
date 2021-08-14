export const render = (data) => {
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
        </div>
      </article>
  `;
    cards.insertAdjacentHTML("beforeend", html);
  });
};

let cartArr = [];
export const handleClick = (e) => {
  if (e.target.className === "btn add-to-cart-js") {
    let button = e.target;
    let product = button.parentElement.parentElement;
    let productId = product.getAttribute("id");
    let productImageSrc = product.querySelector("img").src;
    let productName = product.querySelector(".card__title").innerText;
    let productPrice = product
      .querySelector(".card__price-js")
      .innerText.slice(1);
    let productObj = { productId, productImageSrc, productName, productPrice };
    // if the array is empty, will add new object
    if (cartArr.length < 1) {
      cartArr.push(productObj);
    }
    // will check if product being added to array already exsist
    let foundItem = cartArr.some(
      (item) => item.productId === productObj.productId
    );
    // if not found, then push object into array
    if (!foundItem) cartArr.push(productObj);

    console.log(cartArr);
    updateCartDisplay(cartArr);
  }
};

const updateCartDisplay = (arr) => {
  const products = document.querySelector(".products-js");
  products.innerHTML = "";

  arr.forEach((el) => {
    let html = "";
    html = `
      <article id=${el.productId} class="modal__item">
        <div class="modal__figure">
          <img src="${el.productImageSrc}" alt="${el.productName}">
        </div>
        <div class="modal__body">
          <span class="modal__product-name">${el.productName}</span>
          <span class="modal__product-price">$${el.productPrice}</span>
          <div class="modal__qty-btn-container">
            <input class="modal__input-qty" type="number" min="0" max="50">
            <span><button class="close-btn">&times;</button></span>
          </div>
        </div>
      </article>
  `;
    products.insertAdjacentHTML("beforeend", html);
  });
};
