// Node modules
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import Data from "../../data/inventory.json";
import Product from "./Product";
import { CartProvider } from "../../state/CartContext";

/**
 * These tests are wrapped in MagicRouter to support routing with custom ids.
 */
test("Shows the product", () => {
  // Arrange
  const { items } = Data;
  const id = 1;
  const page = <Product data={items} />;
  const result = "Philips hue bulb"; // first product

  render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <CartProvider>
        <Routes>
          <Route path="/path/:id" element={page} />
        </Routes>
      </CartProvider>
    </MemoryRouter>
  );

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

test("Shows invalid id error", () => {
  // Arrange
  const { items } = Data;
  const id = 42; // invalid id on purpose
  const page = <Product data={items} />;
  const result = "Invalid product";

  render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <CartProvider>
        <Routes>
          <Route path="/path/:id" element={page} />
        </Routes>
      </CartProvider>
    </MemoryRouter>
  );

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

test("Shows product not available error", () => {
  // Arrange
  const { items } = Data;
  const id = 5; // valid id but from an out of stock prodcut
  const page = <Product data={items} />;
  const result = "Product not available";

  render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <CartProvider>
        <Routes>
          <Route path="/path/:id" element={page} />
        </Routes>
      </CartProvider>
    </MemoryRouter>
  );

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
