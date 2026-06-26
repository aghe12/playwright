import { expect, Locator, test } from "@playwright/test";

test("Single Select Drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1.Selec options from dropdown(4 ways)
  await page.locator("#country").selectOption("India"); //visible text

  await page.locator("#country").selectOption({ value: "uk" }); //by using value attribute

  //await page.locator("#country").selectOption({ label: "uk" }); //by uing label

  await page.locator("#country").selectOption({ index: 2 }); //by using value attribute

  //2.check number of options in dropdown(count)
  const dropdownOptions: Locator = await page.locator("#country>option ");
  await expect(dropdownOptions).toHaveCount(10);

  //3.check an option is present in dropdown
  const optionsText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(optionsText);
  expect(optionsText).toContain("India"); //check if the India is present in the dropdown

  //4.printing options from the dropdown

  for (const option of optionsText) {
    console.log(option);
  }

  await page.waitForTimeout(5000);
});
