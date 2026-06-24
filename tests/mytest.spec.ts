import { expect, test } from "@playwright/test";

//fixture -global variable:page browser

test("Verify page title", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  let title: string = await page.title();
  console.log("Title:", title);

  await expect(page).toHaveTitle(
    "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!",
  );
});
