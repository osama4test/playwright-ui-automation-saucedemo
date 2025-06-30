import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async assertLoginFailure() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
