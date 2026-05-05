import {test, expect} from '@playwright/test';

test.describe('Selectors', () => {
  test('should find elements using different selectors', async ({page}) => {
    await page.goto('https://example.com');

    // select by id
    await page.locator('#main').click();

    // select by class
    await page.locator('.example').click();

    // select by attribute
    await page.locator('[data-test="example"]').click();

    // select by text
    await page.locator('text=Example Domain').click();
  
    // select by role
    await page.locator('role=button[name="More information"]').click();
  
     // select by nth-child
    await page.locator('ul li:nth-child(2)').click();
     
    // select by combination of selectors
    await page.locator('div.example > a').click();
  
    // select by regex
    await page.locator('text=/^Example/').click();
  
    // select by custom selector
    await page.locator('custom-selector').click();
    });
});