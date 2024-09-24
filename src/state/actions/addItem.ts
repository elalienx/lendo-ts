// Project files
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], payload: CartItem) {
  // Properties
  const newItem = payload;
  const result = [...state, newItem];

  return result;
}
