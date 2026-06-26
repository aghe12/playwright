import { expect, Locator, test } from "@playwright/test";

test("Verify dropdown is Sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const dropDownOptions: Locator = page.locator("#animals>option");
  //console.log(await dropDownOptions.allTextContents());

  const optionsText: string[] = (await dropDownOptions.allTextContents()).map(
    (text) => text.trim(),
  );

  //const originalList:string[]=optionsText;
  //const sortedList:string[]=optionsText.sort(); // if we are using this this will also affect the  original array which we dont wnat so we should use ... spread operator

  const originalList: string[] = [...optionsText];
  const sortedList: string[] = [...optionsText].sort();

  expect(originalList).toEqual(sortedList);

  await page.waitForTimeout(5000);
});
