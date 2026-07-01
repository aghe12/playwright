import { Locator, test } from "@playwright/test";

test.skip("Auto suggest dropdown", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.locator("input[name='q']").first().fill("smart");
  await page.waitForTimeout(5000);

  //Get all the suggested options --> Ctrl+Shift+P on DOM -->emulate focused page
  const options: Locator = page.locator("ul>li");

  const count = await options.count();
  //console.log("Number of suggested options", count);

  console.group("printing all the auto options......");
  //console.log("5th option", await options.nth(5).innerText());

  //printting all the suggested options in the console

  for (let i = 0; i < count; i++) {
    console.log(await options.nth(i).innerText());
    //console.log(await options.nth(i).textContent()); -same
  }

  //select click the smart phone option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === "smartphone") {
      options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
