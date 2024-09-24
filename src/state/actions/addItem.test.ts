// Node modules
import { expect, test } from "vitest";

// Project files
import type CartItem from "types/CartItem";
import addItem from "./addItem";

test("Adds an item to an empty array", () => {
  // Arrange
  const state: CartItem[] = [];
  const payload: CartItem = { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }; // Sega Statun
  const result: CartItem[] = [{ product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }]; // [Sega Statun];

  // Act
  const test = addItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Adds an item to an existing array", () => {
  // Arrange
  const state: CartItem[] = [{ product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }]; // [Sega Statun];
  const payload: CartItem = { product_id: 20, color_index: 0, variant: 0, selectedQuantity: 1 }; // Nintendo 64
  const result: CartItem[] = [
    { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sega Statun;
    { product_id: 20, color_index: 0, variant: 0, selectedQuantity: 1 }, // Nintendo 64
  ];

  // Act
  const test = addItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});
