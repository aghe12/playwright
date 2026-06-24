import { expect, Locator, test } from "@playwright/test";

test("XPath demo in playwright", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //1. Absolute xpath - logo
  const absolutelogo: Locator = page.locator(
    "xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]",

    /*I've fixed the issue! The error occurred because Playwright, by default, tries to parse the locator string as a CSS selector. Since your absolute XPath started with a /, Playwright didn't recognize it and threw a syntax error.*/
  );
  await expect(absolutelogo).toBeVisible();

  //2. Relative xpath -. logo

  const relativelogo: Locator = page.locator(
    "//img[@alt='Tricentis Demo Web Shop']",
  );
  await expect(relativelogo).toBeVisible();

  //3.contains() -
  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");

  const productsCount: number = await products.count();
  expect(productsCount).toBeGreaterThan(0);

  console.log(
    "First computer related product:",
    await products.first().textContent(),
  );
  console.log(
    "Last computer related product:",
    await products.last().textContent(),
  );
  console.log(
    "Nth computer related product:",
    await products.nth(3).textContent(), // index will start from 0
  );

  let productTitles:string[]=await products.allTextContents();
});
