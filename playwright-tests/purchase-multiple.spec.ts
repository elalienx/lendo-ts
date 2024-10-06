// Node modules
import { test, expect } from "@playwright/test";

test("User purchases products", async ({ page }) => {
  // Step 1: Choose first product and configure it
  await page.goto("/");
  await page.click("text=PlayStation 4");
  await page.click("input[aria-label='black']");
  await page.click("text=1000");
  await page.click("text=Add to cart");

  // Step 2: Choose second product from home page
  await expect(page.locator("h1")).toHaveText("Our products");
  await page.click("text=Nintendo switch");
  await page.click("input[aria-label='red']");
  await page.click("text=500");
  await page.fill("input[name='quantity']", "5");
  await page.click("text=Add to cart");

  // Step 3: Choose third product
  await expect(page.locator("h1")).toHaveText("Our products");
  await page.click("text=Bluetooth speaker >> .. >> text=Marshall");
  await page.click("input[aria-label='orange']");
  await page.fill("input[name='quantity']", "2");
  await page.click("text=Add to cart");

  // Step 4: Go to cart and check grand total
  await expect(page.locator("h1")).toHaveText("Our products");
  await page.getByRole("link", { name: "Cart 3" }).click();
  await expect(page.locator(".price-total .price")).toHaveText("29 400"); // sum of 3 products with different quantities

  // Step 5: See the ending message
  await page.click("text=Proceed to payment");

  page.on("dialog", async (dialog) => {
    expect(dialog.message().toLowerCase()).toContain("End of demo 🎉");
    await dialog.accept();
  });
});
