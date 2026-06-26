import { Locator, test } from "@playwright/test";

test("Verify dropdown is Sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const dropDownOptions: Locator = page.locator("#colorss>option"); //having duplicates
  //const dropDownOptions: Locator = page.locator("#animals>option"); //not having duplicates

  const optionsText: string[] = (await dropDownOptions.allTextContents()).map(
    (text) => text.trim(),
  );

  const myset = new Set<string>(); //Set-duplicates not allowed
  const duplicates: string[] = []; // array -duplicates are allowed

  for (const text of optionsText) {
    if (myset.has(text)) {
      duplicates.push(text);
    } else {
      myset.add(text);
    }
  }

  console.log("Duplicate options found ", duplicates);

  if (duplicates.length > 0) {
    console.log("Duplicate options found.", duplicates);
  } else {
    console.log("No duplicate options found .. ");
  }

  await page.waitForTimeout(5000);
});
