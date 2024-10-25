// Project files
import type CartItem from "types/CartItem";
import type ProductOption from "types/ProductOption";

function increaseQuantity(state: CartItem[], index: number, option: ProductOption): CartItem[] {
  // Properties
  const clonedState = [...state];
  const clonedItem = { ...clonedState[index] };

  if (clonedItem.selectedQuantity < option.quantity) {
    clonedItem.selectedQuantity++;
  }

  clonedState[index] = clonedItem;

  return clonedState;
}

export default increaseQuantity;
