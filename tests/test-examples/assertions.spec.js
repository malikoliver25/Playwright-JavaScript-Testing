import {test, expect} from '@playwright/test';

test('Assertions demo', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');

    // 1. Assert the URL
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

    // 2. Assert the page title
    await expect(page).toHaveTitle('The Internet');

    // 3. Assert the presence of a specific element (e.g., header)
    await expect(page.locator('h1')).toHaveText('Welcome to the-internet');

    // 4. Assert the presence of a specific element (e.g., "A/B Testing" link)
    const abTestingLink = page.locator('a', { hasText: 'A/B Testing' });
    await expect(abTestingLink).toBeVisible();
});
