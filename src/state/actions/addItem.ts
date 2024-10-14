// Project files
import findItemIndex from "scripts/findItemIndex";
import type CartItem from "types/CartItem";
import type SKU from "types/SKU";

export default function addItem(state: CartItem[], payload: CartItem): CartItem[] {
  const { productId, colorIndex, variantIndex, selectedQuantity } = payload;
  const sku: SKU = { productId, colorIndex, variantIndex };
  const index = findItemIndex(state, sku);

  // Safeguard
  if (index === -1) return [...state, payload];

  const clonedState = [...state];
  const clonedItem = { ...clonedState[index] };

  clonedItem.selectedQuantity += selectedQuantity;
  clonedState[index] = clonedItem;

  return clonedState;
}
