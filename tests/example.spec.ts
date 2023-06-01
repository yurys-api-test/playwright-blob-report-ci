import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('pw has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('pw get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

  await expect(page).toHaveTitle('Getting Started — Playwright', { timeout: 200 });
});

test('pw browser.launch doc', async ({ page }) => {
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('navigation', { name: 'Docs sidebar' }).getByRole('link', { name: 'Browser', exact: true }).click();

  await page.getByRole('paragraph').filter({ hasText: 'A Browser is created via browserType.launch(). An example of using a Browser to ' }).getByRole('link', { name: 'browserType.launch()' }).click();
  await expect(page.getByText('Returns the browser instance.')).toBeVisible();
});

test('pw bug report link', async ({ page }) => {
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bug Reports' }).click();
  const page1 = await page1Promise;
});
