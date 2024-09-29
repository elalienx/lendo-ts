// Node modules
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import Product from "./Product";
import Data from "data/inventory.json";
import { Toaster } from "react-hot-toast";

// Properties
const { items } = Data;

// Components
function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}

test.todo("Can add 1 item of a normal product", () => {
  // Arrange
  const id = 1; // Philips hue bulb
  const result: RegExp = /product added to cart/i;

  function TestPage() {
    return (
      <div>
        <h1>Test Page</h1>
      </div>
    );
  }

  render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/path/:id" element={<Product data={items} />} />
      </Routes>
      <Toaster />
    </MemoryRouter>
  );

  // Act
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const selectedVariant = screen.getByRole("radio", { name: "6.5" });
  fireEvent.click(selectedVariant);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const test = screen.getByText(result);

  expect(test).toBeInTheDocument();
});

test("Can add 1 item of a product with no variants", () => {
  // Arrange
  const id = 6; // Bluetooth speaker
  const result: RegExp = /product added to cart/i;

  render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/path/:id" element={<Product data={items} />} />
      </Routes>
      <Toaster />
    </MemoryRouter>
  );

  // Act
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const test = screen.getByText(result);

  expect(test).toBeInTheDocument();
});
