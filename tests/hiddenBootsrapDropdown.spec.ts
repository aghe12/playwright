import { Locator, test } from "@playwright/test";

test("Bootsrtap hidden dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  //Login steps
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();

  //click on the PIM
  await page.locator("text=PIM").click();

  //click on the dropdown inside PIM
  await page.locator("form i").nth(2).click();
  await page.waitForTimeout(3000);

  //capture all the options from dropdown and count
  const options: Locator = page.locator("div[role='listbox'] span");

  const count: number = await options.count();
  console.log("Number of options in  a dropdown:", count);

  //print all the options in the dropdown
  for (let i = 0; i < count; i++) {
    console.log(await options.nth(i).textContent());
  }

  //select click on option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === "Automtion Tester") {
      await options.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
