import { cartArr } from "./data.js";

export const updateTotalPrice = () => {
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
