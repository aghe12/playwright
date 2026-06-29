import { Page, Locator } from "@playwright/test";

export class BasePage {
  // We use 'protected' so that child classes (like LoginPage) can access the page object
  constructor(protected page: Page) {}

  // A generic navigation method
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  // A generic method to wait for an element and then fill it
  async fillText(locator: Locator, text: string) {
    await locator.waitFor({ state: "visible" });
    await locator.fill(text);
  }

  // A generic method to wait for an element and then click it
  async clickElement(locator: Locator) {
    await locator.waitFor({ state: "visible" });
    await locator.click();
  }
}
