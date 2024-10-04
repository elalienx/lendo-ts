// Project files
import findItemIndex from "./findItemIndex";
import type CartItem from "types/CartItem";

interface SKU {
  /** The id of the product in the inventory.json used to brind the product description and price. */
  productId: number;

  /** The color of a product as as the index to know what variant to use. */
  colorIndex: number;

  /** Specific variant of a prodcut like 250 or 500 GB of storage. */
  variantIndex: number;
}

export default function getUnitsInCart(cart: CartItem[], sku: SKU): number {
  const productInCartIndex = findItemIndex(cart, sku);
  let result = 0;

  // Safeguard
  if (productInCartIndex === -1) return result;

  result = cart[productInCartIndex].selectedQuantity;

  return result;
}
