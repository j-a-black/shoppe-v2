export const render = (data) => {
  let cards = document.querySelector(".cards");

  data.forEach((data) => {
    let html = "";
    html = `
      <article class="card">
        <div class="card__figure">
          <img
            src="${data.img}"
            alt="${data.title}"
          />
        </div>
        <div class="card__body">
          <span class="card__title">${data.title}</span>
          <span>$${data.price}</span>
          <button class="btn">Add To Cart</button>
        </div>
      </article>
  `;
    cards.insertAdjacentHTML("beforeend", html);
  });
};

export const handleClick = (e) => {
  if (e.target.className === "btn") console.log("its a button");
  //
};
