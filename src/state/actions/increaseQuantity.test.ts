// Node modules
import { expect, test } from "vitest";

// Project files
import type CartItem from "types/CartItem";
import type ProductOption from "types/ProductOption";
import increaseQuantity from "./increaseQuantity";

interface Payload {
  /** The index of the item to remove from cart. */
  index: number;

  /** The product option to know how many units we have already to not exceed the limit. */
  productOption: ProductOption;
}

test("Updates an item in the state", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 4, colorIndex: 0, variantIndex: 1, selectedQuantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  ];
  const payload: Payload = {
    index: 0,
    productOption: {
      color: "red",
      storage: ["250", "500"],
      quantity: 10, // quantity in stock
    },
  };
  const result: CartItem[] = [
    { productId: 4, colorIndex: 0, variantIndex: 1, selectedQuantity: 2 }, // Now have 2 Nintendo Switch in total
  ];

  // Act
  const test = increaseQuantity(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Do not update state if there is not quantity available", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 4, colorIndex: 0, variantIndex: 1, selectedQuantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  ];
  const payload: Payload = {
    index: 0,
    productOption: {
      color: "red",
      storage: ["250", "500"],
      quantity: 1, // quantity in stock
    },
  };
  const result: CartItem[] = [
    { productId: 4, colorIndex: 0, variantIndex: 1, selectedQuantity: 1 }, // keep the same
  ];

  // Act
  const test = increaseQuantity(state, payload);

  // Assert
  expect(test).toEqual(result);
});
