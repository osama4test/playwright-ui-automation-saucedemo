import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL!);

  await page.fill('#user-name', process.env.TEST_USER!);
  await page.fill('#password', process.env.TEST_PASS!);
  await page.click('#login-button');

  // Ensure login is successful
  await page.waitForURL('**/inventory.html');

  // Save the authenticated state
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
