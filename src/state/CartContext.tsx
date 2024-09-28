// Node modules
import { createContext, useContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";

// Project files
import cartReducer from "./cartReducer";
import type CartItem from "types/CartItem";
import type CartActions from "types/CartActions";

// Interfaces
interface Props {
  children?: ReactNode;
  initialValue?: CartItem[];
}
interface ContextValue {
  cart: CartItem[];
  dispatch: Dispatch<CartActions>;
}

// Properties
const initialValues: ContextValue = {
  cart: [],
  dispatch: () => {},
};
const Context = createContext(initialValues);

// For the parent
export function CartProvider({ children, initialValue = [] }: Props) {
  // Local state
  const [cart, dispatch] = useReducer(cartReducer, initialValue);

  return <Context.Provider value={{ cart, dispatch }}>{children}</Context.Provider>;
}

// For the children
export function useCart() {
  const context = useContext(Context);

  return context;
}
