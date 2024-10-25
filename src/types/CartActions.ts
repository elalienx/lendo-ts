// Propject files
import type CartItem from "./CartItem";
import type ProductOption from "./ProductOption";

// Refactor repeated
interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

export default interface CartActions {
  addItem: (payload: CartItem) => void;
  decreaseQuantity: (payload: number) => void;
  deleteItem: (payload: number) => void;
  increaseQuantity: (payload: Payload) => void;
}
