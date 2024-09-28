// Project files
import type CartItem from "types/CartItem";

export default function decreaseQuantity(state: CartItem[], payload: number) {
  // Properties
  const index = payload;
  const newState = [...state];
  const selectedCartItem = { ...newState[index] };

  if (selectedCartItem.selectedQuantity > 1) {
    selectedCartItem.selectedQuantity -= 1;
  }

  newState[index] = selectedCartItem;

  return newState;
}
