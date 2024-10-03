// Node modules
import { expect, test } from "vitest";

// Project files
import findItem from "./findItemIndex";
import CartItem from "types/CartItem";

test("Returns -1 if cannot find a matching product in cart", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn;
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Nintendo 64
  ];
  const productId = 30; // Sony Playstation
  const colorIndex = 0;
  const variantIndex = 0;
  const payload = { productId, colorIndex, variantIndex };
  const result = -1; // Sony Playstation is not on the state array

  // Act
  const test = findItem(state, payload);

  // Assert
  expect(test).toBe(result);
});

test("Returns the index of a found item", () => {
  // Arrange
  const state: CartItem[] = [
    { productId: 10, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sega Saturn;
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Nintendo 64
    { productId: 30, colorIndex: 0, variantIndex: 0, selectedQuantity: 1 }, // Sony PlayStation
  ];
  const productId = 30; // Sony Playstation
  const colorIndex = 0;
  const variantIndex = 0;
  const payload = { productId, colorIndex, variantIndex };
  const result = 2; // 0 = Sega Saturn, 1 = Nintendo 64, 2 = Sony Playstation

  // Act
  const test = findItem(state, payload);

  // Assert
  expect(test).toBe(result);
});
