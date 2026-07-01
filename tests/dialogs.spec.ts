//alert(), confirm(), propmt()
//By default dialogs are auto-dismissed by playwright so you dont have to handle them.

//but we can still trigger them by using dialod.accept() or dialog.dismiss()

import { expect, test } from "@playwright/test";

test("Simple Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toContain("alert");

    console.log("Dialog message is:", dialog.message());
    expect(dialog.message()).toContain("I am an alert box!");
    dialog.accept(); //close dialog by accepting
  });

  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);
});

// test("Simple Dialog - Dismiss", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   page.on("dialog", (dialog) => {
//     console.log("Dialog type is:", dialog.type());
//     expect(dialog.type()).toContain("alert");

//     console.log("Dialog message is:", dialog.message());
//     expect(dialog.message()).toContain("I am an alert box!");
//     dialog.dismiss(); //close dialog by dismissing
//   });

//   await page.locator("#confirmBtn").click();

//   const text: string = await page.locator("#demo").innerText();
//   console.log("Output text", text);

//   expect(await page.locator("#demo")).toHaveText("You pressed cancel");
//   await page.waitForTimeout(5000);
// });

// test("Prompt Dialog", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   page.on("dialog", (dialog) => {
//     console.log("Dialog type is:", dialog.type());
//     expect(dialog.type()).toContain("prompt");

//     console.log("Dialog message is:", dialog.message());
//     expect(dialog.message()).toContain("I am an alert box!");

//     expect(dialog.defaultValue()).toContain("Harry Potter"); //checks default value
//     dialog.accept("John"); //close dialog by dismissing
//   });

// await page.locator("#promptBtn").click();

// const text: string = await page.locator("#demo").innerText();
// console.log("Output text", text);

// //expect(await page.locator("#demo")).toHaveText("You pressed cancel");
// await expect(page.locator("#demo")).toHaveText(
//   "Hello John! How are you today?",
// );
//   await page.waitForTimeout(5000);
// });
