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
      quantity: 1,
    },
    {
      color: "red",
      power: [6.5, 9.5],
      quantity: 5,
    },
  ],
};
const itemWithOneUnit = {
  id: 1, // matches product id
  color: 0, // matches the first option: {color: "white", power: [6.5, 9.5], quantity: 1}
  variant: 1, // matches power: 6.5
  quantity: 1, // how many items of this product the user added to the cart
};
const itemWithManyUnits = {
  id: 1, // matches product id
  color: 1, // matches the second option: {color: "red", power: [6.5, 9.5], quantity: 10}
  variant: 1, // matches power: 6.5
  quantity: 10, // how many items of this product the user added to the cart
};
const dispatch = () => {};

export default {
  ItemWithOneUnit: (
    <DecoratorPage>
      <ItemCart product={product} item={itemWithOneUnit} index={0} dispatch={dispatch} />
    </DecoratorPage>
  ),
  ItemWithManyUnits: (
    <DecoratorPage>
      <ItemCart product={product} item={itemWithManyUnits} index={1} dispatch={dispatch} />
    </DecoratorPage>
  ),
};
