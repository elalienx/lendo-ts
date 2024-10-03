// Project files
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], payload: CartItem) {
  const newItem = payload;
  const itemIndex = state.findIndex(
    (item) =>
      item.product_id === newItem.product_id &&
      item.colorIndex === newItem.colorIndex &&
      item.variantIndex === newItem.variantIndex
  );

  // Safeguard
  if (itemIndex === -1) return [...state, newItem];

  const updatedState = [...state];
  const updatedItem = { ...updatedState[itemIndex] };

  updatedItem.selectedQuantity += newItem.selectedQuantity;
  updatedState[itemIndex] = updatedItem;

  return updatedState;
}
