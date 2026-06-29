import { Page, Locator } from "@playwright/test";

export class NavbarComponent {
  private page: Page;

  // Define our locators for this component
  readonly logOutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize the locators
    this.logOutButton = this.page.getByRole("link", { name: "Log out" });
  }

  // Define actions for this component
  async logout() {
    await this.logOutButton.waitFor({ state: "visible" });
    await this.logOutButton.click();
  }
}
