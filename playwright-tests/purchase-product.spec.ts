// Node modules
import { test, expect } from "@playwright/test";

test("User purchases products", async ({ page }) => {
  // Step 1: Choose one product from home page
  await page.goto("/");
  await page.click("text=PlayStation 4");

  // Step 2: Choose two white PlayStation with 500GB
  await page.click("input[aria-label='white']");
  await page.click("text=500");
  await page.fill("input[name='quantity']", "2");
  await page.click("text=Add to cart");

  // Step 3: Confirm you navigated to the home and go to cart
  await expect(page.locator("h1")).toHaveText("Our products");
  await page.getByRole("link", { name: "Cart 1" }).click();

  // Step 4: Remove one PlayStation and verify final price
  await page.click('button[aria-label="button-minus"]');
  await expect(page.locator(".price-total .price")).toHaveText("5 000");

  // Step 5: See the ending message
  await page.click("text=Proceed to payment");

  page.on("dialog", async (dialog) => {
    expect(dialog.message().toLowerCase()).toContain("End of demo 🎉");
    await dialog.accept();
  });
});
