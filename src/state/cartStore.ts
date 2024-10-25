// Node modules
import { create } from "zustand";

// Project files
import addItem from "./actions/addItem";
import increaseQuantity from "./actions/increaseQuantity";
import decreaseQuantity from "./actions/decreaseQuantity";
import deleteItem from "./actions/deleteItem";
import type CartActions from "types/CartActions";
import type CartItem from "types/CartItem";
import type CartStore from "types/CartStore";
import type ProductOption from "types/ProductOption";

// Refactor repeated
interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

const cartStore = create<CartStore & CartActions>((set) => ({
  // State
  cart: [],

  // Actions
  addItem: (payload: CartItem) => {
    set((state) => ({ cart: addItem(state.cart, payload) }));
  },
  decreaseQuantity: (payload: number) => {
    set((state) => ({ cart: decreaseQuantity(state.cart, payload) }));
  },
  deleteItem: (payload: number) => {
    set((state) => ({ cart: deleteItem(state.cart, payload) }));
  },
  increaseQuantity: (payload: Payload) => {
    set((state) => ({ cart: increaseQuantity(state.cart, payload) }));
  },
}));

export default cartStore;
