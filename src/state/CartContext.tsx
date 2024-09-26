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
const initialValues: ContextValue = {
  cart: [],
  dispatch: () => {},
};
const Context = createContext(initialValues);

// For the parent
export function CartProvider({ children }: Props) {
  // Local state
  const [cart, dispatch] = useReducer(cartReducer, []);

  return <Context.Provider value={{ cart, dispatch }}>{children}</Context.Provider>;
}

// For the children
export function useCart() {
  const context = useContext(Context);

  return context;
}
