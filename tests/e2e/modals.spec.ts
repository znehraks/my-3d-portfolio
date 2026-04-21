import { expect, test } from '@playwright/test';

const modalScenarios: { modal: string; text: RegExp | string }[] = [
  { modal: 'INTRO_ABOUT', text: /AI Creator/ },
  { modal: 'CONTACTS', text: /znehraks@gmail\.com/ },
  { modal: 'CAREER_MIRIDIH', text: /AX 디자인시스템/ },
  { modal: 'CAREER_ARCHIDRAW', text: /아키스케치/ },
  { modal: 'AI_88IGHT', text: /Midjourney/ },
  { modal: 'AI_RAG_BOT', text: /Pinecone/ },
  { modal: 'AWARD_KOPIS', text: /공연예술백신/ },
  { modal: 'AWARD_MYONGJI', text: /금메달/ },
  { modal: 'CERTIFICATIONS', text: /투자자산운용사/ },
  { modal: 'EDUCATION', text: /명지대학교/ },
];

for (const scenario of modalScenarios) {
  test(`opens ${scenario.modal} via ?modal query param`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });

    await page.goto(`/?modal=${scenario.modal}`);

    const openContainer = page.locator('[data-state="open"]');
    await expect(openContainer).toHaveCount(1);
    await expect(openContainer.getByText(scenario.text).first()).toBeVisible();

    expect(errors).toEqual([]);
  });
}

test('ESC key closes an open modal', async ({ page }) => {
  await page.goto('/?modal=INTRO_ABOUT');
  const openContainer = page.locator('[data-state="open"]');
  await expect(openContainer).toHaveCount(1);

  await page.keyboard.press('Escape');
  await expect(page.locator('[data-state="open"]')).toHaveCount(0);
});
