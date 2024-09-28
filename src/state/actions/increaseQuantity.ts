// Project files
import type CartItem from "types/CartItem";
import type ProductOption from "types/ProductOption";

interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

export default function increaseQuantity(state: CartItem[], payload: Payload) {
  const { index, productOption } = payload;

  // Properties
  const newState = [...state];
  const selectedCartItem = { ...newState[index] };

  if (selectedCartItem.selectedQuantity < productOption.quantity) {
    selectedCartItem.selectedQuantity++;
  }

  newState[index] = selectedCartItem;

  return newState;
}
