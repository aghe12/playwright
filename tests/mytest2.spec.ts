import { expect, test } from "@playwright/test";

//fixture -global variable:page browser

test("Verify page title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  let url: string = await page.url();
  console.log("URL:", url);

  await expect(page).toHaveURL(/playwright/);
});
