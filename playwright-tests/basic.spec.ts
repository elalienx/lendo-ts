// Node modules
import { test, expect } from "@playwright/test";

test("Has title", async ({ page }) => {
  // Arrange
  const url = "http://lendo-ts.web.app";
  const result = /Lendo/i;

  // Act
  await page.goto(url);

  // Assert
  // Expect a the <head><title> "to contain" a substring.
  await expect(page).toHaveTitle(result);
});

test("Get cart link", async ({ page }) => {
  // Arrange
  const url = "http://lendo-ts.web.app";
  const result = /your cart is empty/i;

  // Act
  await page.goto(url);
  await page.getByRole("link", { name: "Cart", exact: true }).click();

  // Assert
  await expect(page.getByRole("heading", { name: result })).toBeVisible();
});
