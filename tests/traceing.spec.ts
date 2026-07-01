import { expect, test } from "@playwright/test";

test.only("traceing demo", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123"); //password incorrect
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await expect(page.locator("#nameofuser")).toContainText("Welcome pavanol");
});
