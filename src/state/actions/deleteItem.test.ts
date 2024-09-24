// Node modules
import { expect, test } from "vitest";

// Project files
import deleteItem from "./deleteItem";

test("Remove and item from array", () => {
  // Arrange
  const state = [
    { name: "Eduardo", age: 37 },
    { name: "Alexia", age: 42 },
    { name: "Rocio", age: 65 },
  ];
  const action = {
    type: "remove-item",
    payload: 1, // remove Alexia
  };
  const result = [
    { name: "Eduardo", age: 37 },
    { name: "Rocio", age: 65 },
  ];

  // Act
  const test = deleteItem(state, action);

  // Assert
  expect(test).toEqual(result);
});

test("Does not crash nor mutate state if index is not found", () => {
  // Arrange
  const state = [
    { name: "Eduardo", age: 37 },
    { name: "Alexia", age: 42 },
    { name: "Rocio", age: 65 },
  ];
  const action = {
    type: "remove-item",
    payload: 9, // index does not exist
  };
  const result = [
    { name: "Eduardo", age: 37 },
    { name: "Alexia", age: 42 },
    { name: "Rocio", age: 65 },
  ];

  // Act
  const test = deleteItem(state, action);

  // Assert
  expect(test).toEqual(result);
});
