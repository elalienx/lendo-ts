// Node modules
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import Page404 from "./Page404";

test("Shows error message: 404 not found", () => {
  // Arrange
  const result = "Page not found";

  render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  );

  // Act
  const test = screen.getByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});
