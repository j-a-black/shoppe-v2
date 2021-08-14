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
    if (cartArr.length < 1) {
      cartArr.push(productObj);
    }
    let foundItem = cartArr.some(
      (item) => item.productId === productObj.productId
    );
    if (!foundItem) cartArr.push(productObj);

    console.log(cartArr);
  }
};
