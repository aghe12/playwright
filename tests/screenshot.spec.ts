import { expect, test } from "playwright/test";

test("screenshot demo", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const timestamp = Date.now();

  //page screenshots
  await page.screenshot({
    path: "screenshots/" + "homepage" + timestamp + ".png",
  });

  //full page screenshot
  await page.screenshot({
    path: "screenshots/" + "homepage" + timestamp + ".png",
    fullPage: true,
  });

  const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
  logo.screenshot({
    path: "screenshots/" + "homepage" + timestamp + ".png",
  });
});

test("screenshots from conflits demo", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123"); //password incorrect
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await expect(page.locator("#nameofuser")).toContainText("Welcome pavanol");
});
