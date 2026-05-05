// lib/fixtures.js
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await use(loginPage);
  }
});

export { expect } from '@playwright/test';