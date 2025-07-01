import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  workers: 4,
  globalSetup: require.resolve('./utils/global-setup'),
  reporter: [['line'], ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    storageState: 'storageState.json',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
    // ❌ No slowMo here
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        // ✅ slowMo is valid HERE
        // launchOptions: {
        //   slowMo: 10
        // }
      }
    }
  ]
});
