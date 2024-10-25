// Propject files
import type CartItem from "./CartItem";
import type ProductOption from "./ProductOption";

export default interface CartActions {
  addItem: (item: CartItem) => void;
  decreaseQuantity: (index: number) => void;
  deleteItem: (index: number) => void;
  increaseQuantity: (index: number, option: ProductOption) => void;
}
