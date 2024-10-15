// Node modules
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Project files
import { items } from "data/inventory.json";
import Home from "./Home";
import type Product from "types/Product";

/**
 * These tests are wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
test("Shows product list", () => {
  // Arrange
  const result1 = "Philips hue bulb"; // first product
  const result2 = "BenQ GW2765HE Eye-Care"; // last product

  render(
    <BrowserRouter>
      <Home data={items} />
    </BrowserRouter>
  );

  // Act
  const test1 = screen.queryByText(result1);
  const test2 = screen.queryByText(result2);

  // Assert
  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
});

test("Shows error message if there is not products list", () => {
  // Arrange
  const items: Product[] = []; // empty on purpose
  const result1 = "Philips hue bulb"; // first product
  const result2 = "BenQ GW2765HE Eye-Care"; // last product
  const result3 = "No products available"; // the title of the empty state

  render(
    <BrowserRouter>
      <Home data={items} />
    </BrowserRouter>
  );

  // Act
  const test3 = screen.queryByText(result3);
  const test1 = screen.queryByText(result1);
  const test2 = screen.queryByText(result2);

  // Assert
  expect(test1).not.toBeInTheDocument();
  expect(test2).not.toBeInTheDocument();
  expect(test3).toBeInTheDocument();
});
