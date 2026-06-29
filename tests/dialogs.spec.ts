//alert(), confirm(), propmt()
//By default dialogs are auto-dismissed by playwright so you dont have to handle them.

//but we can still trigger them by using dialod.accept() or dialog.dismiss()

import { test } from "@playwright/test";

test("Simple Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", (dialog) => {

    console.log("Dialog")
    dialog.accept();
  });
  await page.locator("#alertBtn").click();

  await page.waitForTimeout(5000);
});
