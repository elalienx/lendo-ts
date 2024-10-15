// Node modules
import type { ReactNode } from "react";

// Project files
import { items } from "data/inventory.json";
import Checkout from "pages/checkout/Checkout";
import { CartProvider } from "state/CartContext";
import type CartItem from "types/CartItem";

// Properties
const cartItems: CartItem[] = [
  { productId: 1, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 },
  { productId: 2, colorIndex: 0, variantIndex: 0, selectedQuantity: 2 },
  { productId: 3, colorIndex: 0, variantIndex: 0, selectedQuantity: 3 },
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
