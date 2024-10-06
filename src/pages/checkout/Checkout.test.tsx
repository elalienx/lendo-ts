// Node modules
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import { CartProvider } from "state/CartContext";
import Checkout from "./Checkout";
import CartItem from "types/CartItem";
import Product from "types/Product";

// Properties
const fakeItems: Product[] = [
  {
    id: 10,
    name: "Sega Saturn",
    brand: "SEGA",
    price: "399",
    available: true,
    weight: 1,
    options: [
      {
        color: "Black",
        quantity: 10,
        storage: ["4", "8", "32"],
      },
    ],
  },
  {
    id: 20,
    name: "Nintendo 64",
    brand: "Nintendo",
    price: "199",
    available: true,
    weight: 1,
    options: [
      {
        color: "Black",
        quantity: 10,
        storage: ["8"],
      },
    ],
  },
  {
    id: 30,
    name: "PlayStation",
    brand: "Sony",
    price: "299",
    available: true,
    weight: 1,
    options: [
      {
        color: "Gray",
        quantity: 10,
        storage: ["4", "8"],
      },
    ],
  },
];

test("Shows empty state message", () => {
  // Arrange
  const result = "Your cart is empty";

  render(
    <CartProvider>
      <BrowserRouter>
        <Checkout data={fakeItems} />
      </BrowserRouter>
    </CartProvider>
  );

  // Act
  const test = screen.getByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

test("Shows the grand total of multiple items", () => {
  // Arrange
  const result = "698";
  const cart: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Saturn x1 = $399
    { productId: 30, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // PlayStation x1 = $299
  ];

  render(
    <CartProvider initialValue={cart}>
      <BrowserRouter>
        <Checkout data={fakeItems} />
      </BrowserRouter>
    </CartProvider>
  );

  // Act
  const test = screen.getByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
