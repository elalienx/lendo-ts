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

test("Can add 1 item of a normal product", () => {
  // Arrange
  const id = 1; // Philips hue bulb
  const result = /product added to cart/i;

  renderWithRouter(id);

  // Act
  // Note: don't re-arrange the const, these are objects created on the fly on every click
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const selectedVariant = screen.getByRole("radio", { name: "6.5" });
  fireEvent.click(selectedVariant);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const toast = screen.getByText(result);
  expect(toast).toBeInTheDocument();
});

test("Can add 1 item of a product with no variants", () => {
  // Arrange
  const id = 6; // Bluethooh speaker
  const result = /product added to cart/i;

  renderWithRouter(id);

  // Act
  // Note: don't re-arrange the const, these are objects created on the fly on every click
  const selectedColor = screen.getByRole("radio", { name: /white/i });
  fireEvent.click(selectedColor);

  const button = screen.getByRole("button", { name: /add to cart/i });
  fireEvent.click(button);

  // Assert
  const toast = screen.getByText(result);
  expect(toast).toBeInTheDocument();
});
