// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import Badge from "./Badge";

test("Shows 99+ when passing numbers bigger than 100", () => {
  // Arrange
  const number = 1000;
  const result = "99+";

  render(<Badge number={number} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
