// Node modules
import { ReactNode } from "react";

// Project files
import Data from "data/inventory.json";
import Checkout from "pages/checkout/Checkout";
import { CartProvider } from "state/CartContext";
import CartItem from "types/CartItem";

// Properties
const { items } = Data;
const cartItems: CartItem[] = [
  { product_id: 1, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 },
  { product_id: 2, colorIndex: 0, variantIndex: 0, selectedQuantity: 2 },
  { product_id: 3, colorIndex: 0, variantIndex: 0, selectedQuantity: 3 },
];

// Decorators
interface Props {
  children: ReactNode;
}

function Decorator({ children }: Props) {
  return <CartProvider initialValue={cartItems}>{children}</CartProvider>;
}

export default {
  Empty: <Checkout data={items} />,
  WithItems: (
    <Decorator>
      <Checkout data={items} />
    </Decorator>
  ),
};
