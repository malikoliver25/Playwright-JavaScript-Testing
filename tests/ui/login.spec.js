import { test, expect } from '../../lib/fixtures.js';
import loginData from '../../data/LoginData.json' with { type: 'json' };

test.describe('Login Suite - Positive Login & DDT Failure Cases', () => {

  // 1. Positive Test Case
  test('should login successfully with valid credentials', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
  });

  // 2. Negative Test Cases - Data Driven Testing (DDT)
  loginData.invalidCredentials.forEach(({ desc, user, pass, expected }) => {
    test(`should show error for ${desc}`, async ({ loginPage }) => {
      await loginPage.login(user, pass);
      
      // Adding a custom error message helps debug faster
      await expect(loginPage.flashMessage, `Testing ${desc}: Expected message was not found`)
        .toContainText(expected);
    });
  });
});