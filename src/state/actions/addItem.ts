// Project files
import type CartItem from "types/CartItem";

export default function addItem(state: CartItem[], action) {
  const newItem = action;
  const result = [...state, newItem];

  return result;
}
