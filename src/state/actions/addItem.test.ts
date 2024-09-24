// Node modules
import { expect, test } from "vitest";

// Project files
import addItem from "./addItem";

test("Adds an item to an empty array", () => {
  // Arrange
  const state = [];
  const action = {
    type: "add-item",
    payload: { name: "Alexia", age: 42 },
  };
  const result = [{ name: "Alexia", age: 42 }];

  // Act
  const test = addItem(state, action);

  // Assert
  expect(test).toEqual(result);
});

test("Adds an item to an existing array", () => {
  // Arrange
  const state = [{ name: "Eduardo", age: 37 }];
  const action = {
    type: "add-item",
    payload: { name: "Alexia", age: 42 },
  };
  const result = [
    { name: "Eduardo", age: 37 },
    { name: "Alexia", age: 42 },
  ];

  // Act
  const test = addItem(state, action);

  // Assert
  expect(test).toEqual(result);
});
