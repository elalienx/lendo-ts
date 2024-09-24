// Node modules
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ItemCart from "./ItemCart";
import Product from "types/Product";
import CartItem from "types/CartItem";

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
      quantity: 3,
    },
    {
      color: "red",
      power: [6.5, 9.5],
      quantity: 7,
    },
  ],
};

test("Can increase quantity by 1", async () => {
  // Arrange
  const cartItem: CartItem = {
    product_id: 1, // matches product.id
    color_index: 0, // matches the first item in the product.option array
    variant: 0, // matches the first item in the power array.
    selectedQuantity: 2, // how many units the user selected to purchase
  };
  const dispatch = () => {};

  render(
    <CartProvider>
      <ItemCart product={product} cartItem={cartItem} index={0} dispatch={dispatch} />
    </CartProvider>
  );

  // Act
  const test = screen.getByLabelText(/button-plus/i);

  fireEvent.click(test);

  // Assert
  expect(screen.getByText(/quantity: 3/i)).toBeInTheDocument();
});
