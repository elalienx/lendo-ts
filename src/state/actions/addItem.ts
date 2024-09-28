// Project files
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], payload: CartItem) {
  // Properties
  const newItem = payload;
  const result = [...state];
  const resultWithNewItem = [...state, newItem];

  // Safeguards
  const itemIndex = state.findIndex((item) => item.product_id === newItem.product_id);
  if (itemIndex === -1) return resultWithNewItem;

  const isSameProductOption = state[itemIndex].colorIndex === newItem.colorIndex;
  if (!isSameProductOption) return resultWithNewItem;

  // Existing item update
  result[itemIndex].selectedQuantity += newItem.selectedQuantity;

  return result;
}
