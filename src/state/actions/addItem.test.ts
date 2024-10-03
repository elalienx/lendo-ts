// Node modules
import { expect, test } from "vitest";

// Project files
import type CartItem from "types/CartItem";
import addItem from "./addItem";

test("Adds an item to an empty array", () => {
  // Arrange
  const state: CartItem[] = [];
  const payload: CartItem = { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }; // Sega Saturn
  const result: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn
  ];

  // Act
  const test = addItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Adds an item to an existing array", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn;
  ];
  const payload: CartItem = { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }; // Nintendo 64
  const result: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn;
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Nintendo 64
  ];

  // Act
  const test = addItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Adds an already existing item to the array", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn;
  ];
  const payload: CartItem = { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }; // Sega Saturn;
  const result: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 2 }, // Sega Saturn (but with 3 selected quantities);
  ];

  // Act
  const test = addItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});
