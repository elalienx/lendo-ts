// Project files
import addItem from "./actions/addItem";
import increaseQuantity from "./actions/increaseQuantity";
import decreaseQuantity from "./actions/decreaseQuantity";
import deleteItem from "./actions/deleteItem";
import findItemIndex from "./actions/findItem";
import type CartItem from "types/CartItem";
import type CartActions from "types/CartActions";

export default function cartReducer(state: CartItem[], actions: CartActions) {
  const { type, payload } = actions;

  switch (type) {
    case "add-item":
      return addItem(state, payload);
    case "increase-quantity":
      return increaseQuantity(state, payload);
    case "decrease-quantity":
      return decreaseQuantity(state, payload);
    case "delete-item":
      return deleteItem(state, payload);
    case "find-item-index":
      return findItemIndex(state, payload);
    default:
      throw new Error(`The action "${type}" does not exist on cartReducer()`);
  }
}
