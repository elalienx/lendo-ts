// Project files
import type CartItem from "types/CartItem";

export default function deleteItem(state: CartItem[], index: number): CartItem[] {
  // Properties
  const result = [...state];

  result.splice(index, 1);

  return result;
}
