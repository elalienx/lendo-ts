// Node modules
import { create } from "zustand";

// Project files
import addItem from "./actions/addItem";
import decreaseQuantity from "./actions/decreaseQuantity";
import deleteItem from "./actions/deleteItem";
import increaseQuantity from "./actions/increaseQuantity";
import type CartActions from "types/CartActions";
import type CartItem from "types/CartItem";
import type CartStore from "types/CartStore";
import type ProductOption from "types/ProductOption";

const cartStore = create<CartStore & CartActions>((set) => ({
  // State
  cart: [],

  // Actions
  addItem: (item: CartItem) => {
    set((state) => ({ cart: addItem(state.cart, item) }));
  },
  decreaseQuantity: (index: number) => {
    set((state) => ({ cart: decreaseQuantity(state.cart, index) }));
  },
  deleteItem: (index: number) => {
    set((state) => ({ cart: deleteItem(state.cart, index) }));
  },
  increaseQuantity: (index: number, option: ProductOption) => {
    set((state) => ({ cart: increaseQuantity(state.cart, index, option) }));
  },
}));

export default cartStore;
