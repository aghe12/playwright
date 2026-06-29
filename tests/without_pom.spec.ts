import { test, expect } from '@playwright/test';

test('Login and verify without POM (Bad Practice)', async ({ page }) => {
  // 1. Navigate to the page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // 2. Perform actions using hardcoded locators
  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

  // 3. Verify successful login
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
  
  // Let's pretend we have a navbar component here, we would access it like this:
  // (In this specific dummy site, there's a log out button we can interact with)
  const logOutButton = page.getByRole('link', { name: 'Log out' });
  await expect(logOutButton).toBeVisible();
  
  // Click logout
  await logOutButton.click();
  
  // Verify logged out
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});
