// Node modules
import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

// Project files
import cartReducer from "./cartReducer";
import type CartItem from "types/CartItem";
import type CartActions from "types/CartActions";

// Interfaces
interface ContextValue {
  cart: CartItem[];
  dispatch: Dispatch<CartActions>;
}
interface Props {
  children: ReactNode;
}

// Properties
const debugState: CartItem[] = [
  { product_id: 2, colorIndex: 0, variantIndex: 1, selectedQuantity: 2 }, // Trådfria Lampor, "white", power: 9.5, price 300x2 so 600 in total
  { product_id: 4, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  { product_id: 6, colorIndex: 1, variantIndex: 1, selectedQuantity: 3 }, //Bluetooth speaker, "white", price 950x3 2850 in total
];
const initialValues: ContextValue = {
  cart: [],
  dispatch: () => {},
};
const Context = createContext(initialValues);

// For the parent
export function CartProvider({ children }: Props) {
  // Local state
  const [cart, dispatch] = useReducer(cartReducer, debugState);

  return <Context.Provider value={{ cart, dispatch }}>{children}</Context.Provider>;
}

// For the children
export function useCart() {
  const context = useContext(Context);

  return context;
}
