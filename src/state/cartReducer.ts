// Project files
import addItem from "./actions/addItem";
import addQuantity from "./actions/addQuantity";
import removeQuantity from "./actions/removeQuantity";
import deleteItem from "./actions/deleteItem";

/**
 * @param {Cart[]} state
 * @param {CartAction} action
 * @returns
 */
export default function cartReducer(state, actions) {
  const { type } = actions;

  switch (type) {
    case "add-item":
      return addItem(state, actions);
    case "add-quantity":
      return addQuantity(state, actions);
    case "remove-quantity":
      return removeQuantity(state, actions);
    case "delete-item":
      return deleteItem(state, actions);
    default:
      throw new Error(`The action "${type}" does not exist on cartReducer()`);
  }
}
