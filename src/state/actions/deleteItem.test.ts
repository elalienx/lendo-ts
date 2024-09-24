// Node modules
import { expect, test } from "vitest";

// Project files
import type CartItem from "types/CartItem";
import deleteItem from "./deleteItem";

test("Remove and item from array", () => {
  // Arrange
  const state: CartItem[] = [
    { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sega Statun
    { product_id: 20, color_index: 0, variant: 0, selectedQuantity: 1 }, // Nintendo 64
    { product_id: 30, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sony PlayStation
  ];
  const payload = 1; // index 1 in the array is Nintendo 64
  const result: CartItem[] = [
    { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sega Statun
    { product_id: 30, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sony PlayStation
  ];

  // Act
  const test = deleteItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Does not crash nor mutate state if index is not found", () => {
  // Arrange
  const state: CartItem[] = [
    { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sega Statun
    { product_id: 20, color_index: 0, variant: 0, selectedQuantity: 1 }, // Nintendo 64
    { product_id: 30, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sony PlayStation
  ];
  const payload = 9; // index 9 in the array does not exist
  const result: CartItem[] = [
    { product_id: 10, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sega Statun
    { product_id: 20, color_index: 0, variant: 0, selectedQuantity: 1 }, // Nintendo 64
    { product_id: 30, color_index: 0, variant: 0, selectedQuantity: 1 }, // Sony PlayStation
  ];

  // Act
  const test = deleteItem(state, payload);

  // Assert
  expect(test).toEqual(result);
});
