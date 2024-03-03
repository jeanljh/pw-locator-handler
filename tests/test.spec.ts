import { test, expect } from '@playwright/test';

test('addLocatorHandler', async ({ page }) => {
  await page.goto('');
  await page.addLocatorHandler(page.locator('#popupContainer'), async () => {
    await page.locator('#closeButton').click();
  })
  await expect(page.locator('#sampleMessage')).toHaveText('This is a sample message displayed after the page has finished loading.');
});
