import { test, expect } from '@playwright/test';

test('User can successfully log in', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Fill credentials directly
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  
  // Cleaned up the login button locator
  await page.getByRole('button', { name: 'Login' }).click();

  // Assertions (The most important part of the test!)
  await expect(page.locator('h4')).toContainText('Welcome to the Secure Area');
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
});