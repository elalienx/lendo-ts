// Project files
import type Cart from "types/Cart";
import type Product from "types/Product";

export default function calculateGrandTotal(matchingProducts: Product[], cart: Cart[]): number {
  // Safeguard
  if (matchingProducts.length !== cart.length)
    throw new Error("There is a mismatch between the amount of products and items in the cart.");

  // Properties
  const prices = matchingProducts.map((item) => Number(item.price));
  const quantities = cart.map((item) => item.quantity);
  const result = prices.reduce((sum, price, index) => sum + price * quantities[index], 0);

  return result;
}
