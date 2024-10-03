// Project files
import findItemIndex from "scripts/findItemIndex";
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], payload: CartItem): CartItem[] {
  const { productId, colorIndex, variantIndex, selectedQuantity } = payload;
  const index = findItemIndex(state, { productId, colorIndex, variantIndex });

  // Safeguard
  if (index === -1) return [...state, payload];

  const updatedState = [...state];
  const updatedItem = { ...updatedState[index] };

  updatedItem.selectedQuantity += selectedQuantity;
  updatedState[index] = updatedItem;

  return updatedState;
}
