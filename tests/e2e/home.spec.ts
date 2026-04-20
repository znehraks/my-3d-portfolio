import { expect, test } from '@playwright/test';

test('home page loads the 3D scene without runtime errors', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/');
  await expect(page.locator('#canvas')).toBeVisible();
  await page.waitForTimeout(1_000);

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
