// Project files
import findItemIndex from "./findItemIndex";
import type CartItem from "types/CartItem";
import type SKU from "types/SKU";

export default function getUnitsInCart(cart: CartItem[], sku: SKU): number {
  const productInCartIndex = findItemIndex(cart, sku);
  let result = 0;

  // Safeguard
  if (productInCartIndex === -1) return result;

  result = cart[productInCartIndex].selectedQuantity;

  return result;
}
