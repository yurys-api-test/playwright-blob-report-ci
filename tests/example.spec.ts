import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('pw has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('pw 2', async ({ }) => {
  await expect(1).toBe(2);
});

test('pw 3', async ({ page }) => {
  await expect(1).toBe(2);
});


test('pw 4 skipped', async ({ page }) => {
  test.skip();
  await expect(1).toBe(2);
});
