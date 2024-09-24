// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import ButtonCart from "./ButtonCart";

test("Should hide badge if cart is empty", () => {
  // Arrange
  const number = 0;
  const result = "0";

  render(<ButtonCart number={number} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).not.toBeInTheDocument();
});

test("Should show badge if cart has items", () => {
  // Arrange
  const number = 3;
  const result = "3";

  render(<ButtonCart number={number} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
