import { test as setup, expect } from '@playwright/test';
import path from 'path';
import * as dotenv from 'dotenv';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

dotenv.config();

setup('Kirjaudu ja tallenna kirjautumistila', async ({ page }) => {
  // Kirjaudu
  await page.goto('https://app.heiaheia.com/account');
  await page.getByLabel('Email').fill(process.env.TEST_EMAIL || '');
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD || '');
  await page.keyboard.press('Tab');
  await page.click('button[type="submit"]');
  await page.waitForURL('https://app.heiaheia.com/');
  // Tallenna kirjautumistila
  await page.context().storageState({ path: authFile });
});