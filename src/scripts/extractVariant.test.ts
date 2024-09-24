// Node modules
import { expect, test } from "vitest";

// Project files
import extractVariant from "./extractVariant";
import type ProductOption from "types/ProductOption";

test("Correctly extracts the power and returns it as an array", () => {
  // Arrange
  const productOption: ProductOption = {
    color: "white",
    power: [6.5, 9.5],
    quantity: 3,
  };
  const keysToRemove = ["color", "quantity"];
  const result: number[] = [6.5, 9.5];

  // Act
  const test = extractVariant(productOption, keysToRemove);

  // Assert
  expect(test).toEqual(result);
});

test("Correctly extracts the storage and returns it as an array", () => {
  // Arrange
  const productOption: ProductOption = {
    color: ["black"],
    storage: ["250", "500", "1000"],
    quantity: 10,
  };
  const keysToRemove = ["color", "quantity"];
  const result = ["250", "500", "1000"];

  // Act
  const test = extractVariant(productOption, keysToRemove);

  // Assert
  expect(test).toEqual(result);
});

test("Does not crash if does not find the remaining key", () => {
  // Arrange
  const productOption: ProductOption = {
    color: ["black"],
    quantity: 10,
  }; // missing a variant key on purpose
  const keysToRemove = ["color", "quantity"];
  const result: number[] | string[] = [];

  // Act
  const test = extractVariant(productOption, keysToRemove);

  // Assert
  expect(test).toEqual(result);
});
