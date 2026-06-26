import { expect, Locator, test } from "@playwright/test";

test("Single Select Drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1.Selec options from dropdown(4 ways)
  await page.locator("#colors").selectOption(["Red", "Blue", "Green"]); //visible text
  await page
    .locator("#colors")
    .selectOption([
      { index: 0 },
      { index: 1 },
      { index: 2 },
      { index: 3 },
      { index: 4 },
      { index: 5 },
      { index: 6 },
    ]); //by using index
  await page.locator("#colors").selectOption(["red", "blue", "green"]); //by using value attribute
  await page.locator("#colors").selectOption(["red", "blue", "green"]); //by using label

  //2) check number of options in the dropdown(count)
  const dropdownOptions: Locator = page.locator("#colors>option");
  await expect(dropdownOptions).toHaveCount(7);

  //3) check an option present in the dropdown
  const optionsText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(optionsText);

  expect(optionsText).toContain("Green"); // Check if the array contains "Green"

  //4) printing options from the drop down

  for (const option of optionsText) {
    console.log(option);
  }

  await page.waitForTimeout(5000);
});
