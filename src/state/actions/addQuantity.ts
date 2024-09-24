// Project files
import type CartItem from "types/CartItem";
import ProductOption from "types/ProductOption";

interface Payload {
  /**  The index of the item to remove from cart. */
  index: number;

  /**  The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

export default function addQuantity(state: CartItem[], payload: Payload) {
  const { index, productOption } = payload;
  console.log("3. addQuantity() index, productOtion", index, productOption);

  const newState = [...state];
  const selectedCartItem = { ...newState[index] };

  if (selectedCartItem.selectedQuantity < productOption.quantity) {
    selectedCartItem.selectedQuantity++;
  }

  newState[index] = selectedCartItem;

  return newState;
}
