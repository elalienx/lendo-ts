// Project files
import type CartItem from "types/CartItem";

export default function deleteItem(state: CartItem[], payload: number) {
  // Properties
  const index = payload;
  const result = [...state];

  result.splice(index, 1);

  return result;
}
