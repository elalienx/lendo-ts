/**
 *
 * @param {*} matchingProducts: the products matching item in the user cart.
 * @param {*} cart: the user cart with the selected quantity for each product.
 * @returns {number} the total sum of products multiply for each user quantity.
 */
export default function calculateGrandTotal(matchingProducts, cart) {
  // Safeguard
  if (matchingProducts.length !== cart.length) throw new Error("There is a mismatch between the amount of products and items in the cart.");

  // Properties
  const prices = matchingProducts.map((item) => Number(item.price));
  const quantities = cart.map((item) => item.quantity);
  const result = prices.reduce((sum, price, index) => sum + price * quantities[index], 0);

  return result;
}
