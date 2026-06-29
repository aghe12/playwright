import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.pages";

export class LoginPage extends BasePage {
  // Locators specific to the login page
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    // Call the parent BasePage constructor
    super(page);

    // Initialize locators
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.locator("#password");
    this.submitButton = this.page.locator("#submit");
  }

  // An action method specifically for logging in
  async login(username: string, password: string) {
    // Notice how we use 'this.fillText' and 'this.clickElement' which come from BasePage!
    await this.fillText(this.usernameInput, username);
    await this.fillText(this.passwordInput, password);
    await this.clickElement(this.submitButton);
  }
}
