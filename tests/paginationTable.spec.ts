import { expect, Locator, test } from "@playwright/test";

test("Read data from all the table pages", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/table_sorting.html",
  );

  let hasMOrePage = true;

  while (hasMOrePage) {
    const rows = await page.locator("#example tbody tr").all();
    for (let row of rows) {
      console.log(await row.innerText());
    }

    const nextButton: Locator = page.getByRole("link", { name: "Next" });
    const isDisabled = await nextButton.getAttribute("class");

    if (isDisabled?.includes("disabled")) {
      hasMOrePage = false;
    } else {
      await nextButton.click();
    }
  }
});

test("Filter the rows and check the rows count", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/table_sorting.html",
  );

  const dropdown: Locator = page.locator("#dt-length-0");
  await dropdown.selectOption({ label: "25" });

  //Approch -1
  const rows = await page.locator("#example tbody tr").all();
  expect(rows.length).toBe(25);

  //Approch -2
  const row2 = page.locator("#example tbody tr");
  await expect(row2).toHaveCount(25);
});

test("Search for specific data in a table", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/table_sorting.html",
  );

  const searchBox: Locator = page.locator("#td-search-0");
  await searchBox.fill("Paul Byrd");

  const rows = await page.locator("#example tbody tr").all();

  if (rows.length >= 1) {
    let matchFound = false;
    for (const row of rows) {
      const text = await row.innerText();
      if (text.includes("Paul Byrd")) {
        matchFound = true;
        break;
      }
    }
    //expect(matchFound).toBe(true);
    expect(matchFound).toBeTruthy();
  } else {
    console.log("No rows found with search text");
  }
});
