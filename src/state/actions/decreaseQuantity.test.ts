// Node modules
import { expect, test } from "vitest";

// Project files
import decreaseQuantity from "./decreaseQuantity";
import type CartItem from "types/CartItem";
import type ProductOption from "types/ProductOption";

interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

test("Decreases an item with more than one unit", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 5 }, // Sega Saturn
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 5 }, // Nintendo 64
  ];
  const payload = 0; // index 0 = Saturn
  const result: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 4 }, // Sega Saturn with 1 unit less
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 5 }, // Nintendo 64
  ];

  // Act
  const test = decreaseQuantity(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Do not decrease item if there is not quantity available", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 5 }, // Nintendo 64
  ];
  const payload = 0; // index 0 = Saturn
  const result: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn with still 1 unit
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 5 }, // Nintendo 64
  ];

  // Act
  const test = decreaseQuantity(state, payload);

  // Assert
  expect(test).toEqual(result);
});
