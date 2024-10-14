// Project files
import type CartItem from "types/CartItem";
import type ProductOption from "types/ProductOption";

interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

export default function increaseQuantity(state: CartItem[], payload: Payload): CartItem[] {
  const { index, productOption } = payload;

  // Properties
  const clonedState = [...state];
  const clonedItem = { ...clonedState[index] };

  if (clonedItem.selectedQuantity < productOption.quantity) {
    clonedItem.selectedQuantity++;
  }

  clonedState[index] = clonedItem;

  return clonedState;
}
