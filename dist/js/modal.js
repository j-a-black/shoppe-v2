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
