// Project files
import findItemIndex from "scripts/findItemIndex";
import type CartItem from "types/CartItem";
import type SKU from "types/SKU";

export default function addItem(state: CartItem[], item: CartItem): CartItem[] {
  const { productId, colorIndex, variantIndex, selectedQuantity } = item;
  const sku: SKU = { productId, colorIndex, variantIndex };
  const index = findItemIndex(state, sku);

  // Safeguard
  if (index === -1) return [...state, item];

  const clonedState = [...state];
  const clonedItem = { ...clonedState[index] };

  clonedItem.selectedQuantity += selectedQuantity;
  clonedState[index] = clonedItem;

  return clonedState;
}
