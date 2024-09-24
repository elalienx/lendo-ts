// Node modules
import { expect, test } from "vitest";

// Project files
import addQuantity from "./addQuantity";

test("Updates an item in the state", () => {
  // Arrange
  const state = [
    { id: 4, color: 0, variant: 1, quantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  ];
  const action = {
    type: "update-item-quantity",
    payload: {
      index: 0,
      option: {
        color: "red",
        storage: ["250", "500"],
        quantity: 10, // quantity in stock
      },
    },
  };
  const result = [
    { id: 4, color: 0, variant: 1, quantity: 2 }, // Now have 2 Nintendo Switch in total
  ];

  // Act
  const test = addQuantity(state, action);

  // Assert
  expect(test).toEqual(result);
});

test("Do not update state if there is not quantity available", () => {
  // Arrange
  const state = [
    { id: 4, color: 0, variant: 1, quantity: 1 }, // Nintendo switch, "red", storage: "500", price 4500
  ];
  const action = {
    type: "update-item-quantity",
    payload: {
      index: 0,
      option: {
        color: "red",
        storage: ["250", "500"],
        quantity: 1, // quantity in stock
      },
    },
  };
  const result = [
    { id: 4, color: 0, variant: 1, quantity: 1 }, // keep the same
  ];

  // Act
  const test = addQuantity(state, action);

  // Assert
  expect(test).toEqual(result);
});
