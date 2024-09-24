// Project files
import type CartItem from "types/CartItem";

export default function deleteItem(state: CartItem[], action) {
  const index = action.payload;
  const result = [...state];
  result.splice(index, 1);

  return result;
}
