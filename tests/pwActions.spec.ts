import { expect, Locator, test } from "@playwright/test";

//Text input/Text Box/ Input Box
test("Text input actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const textBox: Locator = page.locator("#name");

  await expect(textBox).toBeVisible();
  await expect(textBox).toBeEnabled();

  const maxlength: string | null = await textBox.getAttribute("maxlength");
  expect(maxlength).toBe("15");

  await textBox.fill("Megha");

  //console.log("text content of FirstName: ", await textBox.textContent()); // returns empty

  const enteredvalue: string = await textBox.inputValue();
  console.log("Input value of the FirstName:", enteredvalue); // returs the input value of the text box

  expect(enteredvalue).toBe("Megha");

  await page.waitForTimeout(3000);
});

//Radio Buttons

test("Radio Buttons actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const maleRadio: Locator = page.locator("#male");
  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();

  expect(await maleRadio.isChecked()).toBe(false);

  await maleRadio.check(); //select radio button
  expect(await maleRadio.isChecked()).toBe(true);

  await page.waitForTimeout(3000);
});

test("Radio Buttons actions on multiple radio buttons", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1.select specific check box(sunday) using getByLabel and assert
  const sundayCheckbox: Locator = page.getByLabel("Sunday");
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();

  //2.Select all checkboxes and assert each is isChecked'
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  //3.select all checkboxes and assert each is checked
  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  //4.uncheck last 3 checkboxes and assert
  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  //unselect the checkbox whichis selected and check the box which is not selected
  for (const checkbox of checkboxes) {
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    } else {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  //7.Randomely select check boxes -select checkboxes randomly by using index (1,3,6) and assert
  const indexes: number[] = [1, 3, 6];

  for (const i of indexes) {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
  }
  //7.Select the check box based in the label
  const weekname: string = "Friday";

  for (const label of days) {
  if(label.toLowerCase()===weekname.toLowerCase()){
    const checkbox=page.getByLabel(label);
    checkbox.check();
    await expect(checkbox).toBeChecked();
  }
  }
  await page.waitForTimeout(5000);

});

