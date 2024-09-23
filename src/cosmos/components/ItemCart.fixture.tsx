// Node modules
import { ReactNode } from "react";

// Project file
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
const product = {
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
      quantity: 3,
    },
    {
      color: "red",
      power: [6.5, 9.5],
      quantity: 7,
    },
  ],
};
const item = {
  id: 1, // matches product id
  color: 1, // matches the first option: {color: "white", power: [6.5, 9.5], quantity: 3}
  variant: 2, // matches power: 9.5
  quantity: 2, // how many items of this product the user added to the cart
};

export default {
  Default: (
    <DecoratorPage>
      <ItemCart product={product} item={item} />
    </DecoratorPage>
  ),
};
