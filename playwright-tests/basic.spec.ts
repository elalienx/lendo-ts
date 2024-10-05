// Node modules
import { test, expect } from "@playwright/test";

test("Has title", async ({ page }) => {
  // Arrange
  const localhost = "/";
  const result = /Lendo/i;

  // Act
  await page.goto(localhost);

  // Assert
  // Expect a the <head><title> "to contain" a substring.
  await expect(page).toHaveTitle(result);
});

test("Get cart link", async ({ page }) => {
  // Arrange
  const localhost = "/";
  const result = /your cart is empty/i;

  // Act
  await page.goto(localhost);
  await page.getByRole("link", { name: "Cart", exact: true }).click();

  // Assert
  await expect(page.getByRole("heading", { name: result })).toBeVisible();
});
