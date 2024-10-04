// Node modules
import { expect, test } from "vitest";

// Project files
import getUnitsInCart from "./getUnitsInCart";
import type CartItem from "types/CartItem";
import type SKU from "types/SKU";

test("Returns the total units of an item in the cart", () => {
  // Arrange
  const cart: CartItem[] = [
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 6 }, // Nintendo 64, color: "default black", variant: "default"
    { productId: 20, colorIndex: 1, variantIndex: 1, selectedQuantity: 9 }, // Nintendo 64, color: "atomic purple", variant: "with expansion pack"
    { productId: 30, colorIndex: 0, variantIndex: 0, selectedQuantity: 12 }, // Sony PlayStation, color: "dark grey", variant: "default"
  ];
  const sku: SKU = { productId: 20, colorIndex: 1, variantIndex: 1 }; // Nintendo 64, color: "atomic purple", variant: "with expansion pack"
  const result = 9; // 9 units of the  Nintendo 64, color: "atomic purple", variant: "with expansion pack"

  // Act
  const test = getUnitsInCart(cart, sku);

  // Assert
  expect(test).toBe(result);
});

test("Returns 0 if it cannot find item in cart", () => {
  // Arrange
  const cart: CartItem[] = [
    { productId: 20, colorIndex: 0, variantIndex: 0, selectedQuantity: 6 }, // Nintendo 64, color: "default black", variant: "default"
    { productId: 20, colorIndex: 1, variantIndex: 1, selectedQuantity: 9 }, // Nintendo 64, color: "atomic purple", variant: "with expansion pack"
    { productId: 30, colorIndex: 0, variantIndex: 0, selectedQuantity: 12 }, // Sony PlayStation, color: "dark grey", variant: "default"
  ];
  const sku: SKU = { productId: 30, colorIndex: 1, variantIndex: 1 }; // Sony PlayStation, color: "light grey", variant: "slim"
  const result = 0; // There is 0 units of the Sony PlayStation, color: "light grey", variant: "slim" because is not on the cart

  // Act
  const test = getUnitsInCart(cart, sku);

  // Assert
  expect(test).toBe(result);
});
