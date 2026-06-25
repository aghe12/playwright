import { expect, test } from "@playwright/test";

test("Verify CSS locator", async ({ page }) => {
  // for id
  //await page.goto("https://demowebshop.tricents.com");

  //await expect(page.locator("input#small-searchterms")).toBeVisible();
  //await page.locator("input#small-searchterms").fill("Tshirts");

  //for class
  await page.goto("https://docs.nestjs.com/");

  await expect(page.locator(".DocSearch-Button")).toBeVisible();
  await page.locator(".DocSearch-Button").click();
  await page.locator(".DocSearch-Input").fill("Testing");

  //tag[attribute=value]
  await page.locator("[aria-label='Search (Ctrl+K)']").fill("Testing");
  await expect(
    page.locator("button[aria-label='Search (Ctrl+K)']"),
  ).toBeVisible();
  await page.locator("button[aria-label='Search (Ctrl+K)']").click();

  //tag.class

  //await page.locator("input.search-box-text").fill("T-Shirts");
  //await page.locator(".search-box-text").fill("T-Shirts");

  //tag[attribute=value]
  //await page.locator("input[name=q]").fill("T-Shirts");
  //await page.locator("[name=q]").fill("T-Shirts");

  //tag.class[attribute=value]
  //await page.locator("input.search-box-text[value='Search store']").fill("T-Shirts");
  await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");
});
