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

test('resume sr-only main landmark exposes full resume to crawlers', async ({ page }) => {
  await page.goto('/');

  const main = page.locator('main[aria-label="이력서 텍스트 버전"]');
  await expect(main).toHaveCount(1);
  await expect(main).toHaveClass(/sr-only/);

  const mainText = await main.innerText();
  expect(mainText).toContain('유정민');
  expect(mainText).toContain('AI Creator');
  for (const company of ['미리디', 'AiV', '무하유', '아키드로우', '724랩', '패스트캠퍼스']) {
    expect(mainText).toContain(company);
  }
  expect(mainText).toContain('KOPIS');
  expect(mainText).toContain('명지대학교');
  expect(mainText).toContain('znehraks@gmail.com');
});

test('resume structured data is injected as JSON-LD', async ({ page }) => {
  await page.goto('/');

  const ldPayload = await page.locator('script[type="application/ld+json"]').first().textContent();
  expect(ldPayload).not.toBeNull();
  const parsed = JSON.parse(ldPayload ?? '{}');
  expect(parsed['@type']).toBe('ProfilePage');
  expect(parsed.mainEntity?.name).toBe('유정민');
  expect(parsed.mainEntity?.jobTitle).toContain('AI Creator');
  expect(Array.isArray(parsed.mainEntity?.hasOccupation)).toBe(true);
  expect(parsed.mainEntity.hasOccupation.length).toBeGreaterThanOrEqual(5);
});
