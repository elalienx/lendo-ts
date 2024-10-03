// Node modules
import type { ReactNode } from "react";

// Project file
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import ItemCart from "components/item-cart/ItemCart";

// Decorators
interface Props {
  children: ReactNode;
}

function DecoratorPage({ children }: Props) {
  return (
    <div
      className="page"
      style={{ maxWidth: "1200px", width: "100%", display: "grid", placeItems: "center" }}
    >
      {children}
    </div>
  );
}

// Properties
const product: Product = {
  id: 1,
  name: "Philips hue bulb",
  brand: "Philips",
  price: "500",
  available: true,
  weight: 0.2,
  options: [
    {
      color: "white",
      power: [6.5, 9.5],
      quantity: 1,
    },
    {
      color: "red",
      power: [6.5, 9.5],
      quantity: 5,
    },
  ],
};
const itemWithOneUnit: CartItem = {
  productId: 1, // matches product id
  colorIndex: 0, // matches the first option: {color: "white", power: [6.5, 9.5], quantity: 1}
  variantIndex: 1, // matches power: 6.5
  selectedQuantity: 1, // how many items of this product the user added to the cart
};
const itemWithManyUnits: CartItem = {
  productId: 1, // matches product id
  colorIndex: 1, // matches the second option: {color: "red", power: [6.5, 9.5], quantity: 10}
  variantIndex: 1, // matches power: 6.5
  selectedQuantity: 10, // how many items of this product the user added to the cart
};

export default {
  ItemWithOneUnit: (
    <DecoratorPage>
      <ItemCart product={product} cartItem={itemWithOneUnit} index={0} />
    </DecoratorPage>
  ),
  ItemWithManyUnits: (
    <DecoratorPage>
      <ItemCart product={product} cartItem={itemWithManyUnits} index={1} />
    </DecoratorPage>
  ),
};
