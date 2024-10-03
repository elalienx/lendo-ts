// Node modules
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, test, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import toast, { Toaster } from "react-hot-toast";

// Project files
import Product from "./Product";
import Data from "data/inventory.json";

afterEach(() => {
  cleanup();
  toast.remove();
});

// Properties
const { items } = Data;

function renderWithRouter(id: number) {
  return render(
    <MemoryRouter initialEntries={[`/path/${id}`]}>
      <Routes>
        <Route path="/" element={<div>fake page</div>} />
        <Route path="/path/:id" element={<Product data={items} />} />
      </Routes>
      <Toaster />
    </MemoryRouter>
  );
}

test("Adds 1 item of a normal product", () => {
  // Arrange
  const id = 1; // Philips hue bulb
  const result = /product added to cart/i;

  renderWithRouter(id);

  // Act
  // Note: don't re-arrange the const, these objects are created on the fly on every click
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const selectedVariant = screen.getByRole("radio", { name: "6.5" });
  fireEvent.click(selectedVariant);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const toast = screen.queryByText(result);
  expect(toast).toBeInTheDocument();
});

test("Adds 1 item of a product with no variants", () => {
  // Arrange
  const id = 6; // Bluethooh speaker
  const result = /product added to cart/i;

  renderWithRouter(id);

  // Act
  // Note: don't re-arrange the const, these objects are created on the fly on every click
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const toast = screen.queryByText(result);
  expect(toast).toBeInTheDocument();
});

test("Blocks a product with no units left from being added", () => {
  // Arrange
  const id = 2; // Trådfria Lampor
  const result = /product added to cart/i;

  renderWithRouter(id);

  // Act
  // Note: don't re-arrange the const, these objects are created on the fly on every click
  const selectedColor = screen.getByRole("radio", { name: /green/i });
  fireEvent.click(selectedColor);

  const selectedVariant = screen.getByRole("radio", { name: "6.5" });
  fireEvent.click(selectedVariant);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const toast = screen.queryByText(result);
  expect(toast).not.toBeInTheDocument();
});
