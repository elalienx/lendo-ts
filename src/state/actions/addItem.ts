// Project files
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], payload: CartItem) {
  const newItem = payload;

  // Safeguards: Check if the item already exists in the cart with the same options
  const itemIndex = state.findIndex(
    (item) => item.product_id === newItem.product_id && item.colorIndex === newItem.colorIndex
  );

  // If the item doesn't exist, add it to the cart
  if (itemIndex === -1) {
    return [...state, newItem];
  }

  // If the item exists, update the quantity
  const updatedState = [...state];

  // Create a deep copy of the item to avoid mutating the original state
  const updatedItem = { ...updatedState[itemIndex] };
  updatedItem.selectedQuantity += newItem.selectedQuantity;

  // Replace the old item with the updated item
  updatedState[itemIndex] = updatedItem;

  return updatedState;
}
