// Propject files
import type CartItem from "./CartItem";
import type ProductOption from "./ProductOption";

type CartActions = AddItem | DeleteItem | IncreaseQuantity | DecreaseQuantity | FindItemIndex;

interface AddItem {
  type: "add-item";
  payload: CartItem; // a new cart item
}

interface DeleteItem {
  type: "delete-item";
  payload: number; // the index of the item to remove from cart
}

interface IncreaseQuantity {
  type: "increase-quantity";
  payload: {
    index: number; // the index of the item to remove from cart
    productOption: ProductOption; // to know how many units we have already to not exceed the limit
  };
}

interface DecreaseQuantity {
  type: "decrease-quantity";
  payload: number; // the index of the item to remove the item quantity
}

interface FindItemIndex {
  type: "find-item-index";
  payload: {
    productId: number;
    colorIndex: number;
    variantIndex: number;
  };
}

export default CartActions;
