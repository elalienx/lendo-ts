// Propject files
import CartItem from "./CartItem";
import ProductOption from "./ProductOption";

type CartActions = AddItem | DeleteItem | AddQuantity | RemoveQuantity;

interface AddItem {
  type: "add-item";
  payload: CartItem; // a new cart item
}

interface DeleteItem {
  type: "delete-item";
  payload: number; // the index of the item to remove from cart
}

interface AddQuantity {
  type: "add-quantity";
  payload: {
    index: number; // the index of the item to remove from cart
    productOption: ProductOption; // to know how many units we have already to not exceed the limit
  };
}

interface RemoveQuantity {
  type: "remove-quantity";
  payload: number; // the index of the item to remove the item quantity
}

export default CartActions;
