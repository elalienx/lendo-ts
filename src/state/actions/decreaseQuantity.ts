// Project files
import type CartItem from "types/CartItem";

export default function decreaseQuantity(state: CartItem[], index: number): CartItem[] {
  // Properties
  const clonedState = [...state];
  const clonedItem = { ...clonedState[index] };

  if (clonedItem.selectedQuantity > 1) {
    clonedItem.selectedQuantity--;
  }

  clonedState[index] = clonedItem;

  return clonedState;
}
