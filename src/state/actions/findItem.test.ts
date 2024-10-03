// Node modules
import { expect, test } from "vitest";

// Project files
import findItem from "./findItem";
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
  const result = -1;

  // Act
  const test = findItem(state, payload);

  // Assert
  expect(test).toBe(result);
});
