/* Locators in playw
1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText()to locate by text content.
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder()to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configur

*/

import { expect, Locator, test } from "@playwright/test";

test("Verify Playwright locators", async ({ page }) => {
  await page.goto("https://docs.nestjs.com/fundamentals/testing");

  //1.Use this locator when your element supports alt such as img and area elements.
  const logo: Locator = page.getByAltText("Mojam Logo");
  await expect(logo).toBeVisible(); //simple assersion

  //2.find an ele by text it contains
  // use this locator  to find non interactive elements like div, span, p ete for the interactive eles like button, a, input use role locators

  await expect(
    page.getByText("To get started, first install the required package:"),
  ).toBeVisible(); // it will also work for sub string

  //3. Locating by role - role is not an attribute it includes button,checkboxes,headings,links,list...

  await page.getByRole("link", { name: "Jest" }).first().click();

  await expect(
    page.getByRole("heading", { name: "Testing", exact: true }),
  ).toBeVisible();

  /*
page.getByLabel() -locate form control by label's text
ideal for the form fields with visible labels

await page.getByLabel("First name").fill("Megha");

//5. page.getByPlaceholder() -finds element with a given placeholder text.Best for inputs with placeholders

await page.getByPlaceholder("Search store").fill("Apple McBook");

  //6. page.getByTitle() to locate an element by its attribute
  //when to use is when your element has a meaningful title attribute
  await expect(
    page.getByTitle(
      "Enterprise | NestJS - A node.js framework built on top of TypeScript",
    ),
  ).toHaveText("Get enterprise support");



  //7. page.getByTestId() to locate an element based on its data-testid attribute
    await expect(
    page.getByTestId("enterprise-support-link"),
  ).toHaveText("Get enterprise support");

*/  
});
