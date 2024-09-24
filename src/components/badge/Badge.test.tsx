// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import Badge from "./Badge";

test("Shows 9+ when passing numbers bigger than 10", () => {
  // Arrange
  const number = 100;
  const result = "9+";

  render(<Badge number={number} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
