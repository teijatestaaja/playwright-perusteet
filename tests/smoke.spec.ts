import { test, expect } from '@playwright/test';

test.describe('Testaa HeiaHeia', () => {
  test('Käyttäjä näkee HeiaHeian etusivulla navigointipalkin', async ({ page }) => {
    await page.goto('https://app.heiaheia.com/');
    await expect(page.getByRole('link', { name: 'Oma tilini' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Viikon ohjelma' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Kaverit' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Treenitilasto' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Treeniloki' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Kirjasto' })).toBeVisible();
  });
  
  test('Käyttäjä voi alkaa lisäämään uutta merkintää', async ({ page }) => {
    await page.goto('https://app.heiaheia.com/');
    await expect(page.getByRole('link', { name: 'Uusi merkintä' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Uusi merkintä' }).first().click();
    await expect(page.getByRole('textbox', { name: 'Haku …' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Haku …' }).click();
    await page.getByRole('textbox', { name: 'Haku …' }).fill('Karate');
    await expect(page.getByRole('link', { name: 'Karate', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sulje' })).toBeVisible();
    await page.getByRole('link', { name: 'Sulje' }).click();
    await expect(page.getByRole('link', { name: 'Uusi merkintä' }).first()).toBeVisible();
  });
});