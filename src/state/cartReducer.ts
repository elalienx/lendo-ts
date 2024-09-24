// Project files
import addItem from "./actions/addItem";
import addQuantity from "./actions/addQuantity";
import removeQuantity from "./actions/removeQuantity";
import deleteItem from "./actions/deleteItem";
import type CartItem from "types/CartItem";
import type CartActions from "types/CartActions";

export default function cartReducer(state: CartItem[], actions: CartActions) {
  const { type, payload } = actions;

  switch (type) {
    case "add-item":
      return addItem(state, payload);
    case "add-quantity":
      return addQuantity(state, payload);
    case "remove-quantity":
      return removeQuantity(state, payload);
    case "delete-item":
      return deleteItem(state, payload);
    default:
      throw new Error(`The action "${type}" does not exist on cartReducer()`);
  }
}