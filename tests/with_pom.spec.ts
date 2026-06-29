import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { NavbarComponent } from "../components/navbar.component";

test("Login and verify with POM (Good Practice)", async ({ page }) => {
  // 1. Initialize our Page Objects and Components
  const loginPage = new LoginPage(page);
  const navbar = new NavbarComponent(page);

  // 2. Perform actions using the clean, abstract methods
  await loginPage.navigateTo(
    "https://practicetestautomation.com/practice-test-login/",
  );
  await loginPage.login("student", "Password123");

  // 3. Verify successful login (Assertions are usually kept in the test file, not the POM)
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/",
  );
  await expect(page.locator(".post-title")).toHaveText(
    "Logged In Successfully",
  );

  // 4. Interact with the Navbar Component
  await expect(navbar.logOutButton).toBeVisible();
  await navbar.logout();

  // 5. Verify logged out
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/practice-test-login/",
  );
});
