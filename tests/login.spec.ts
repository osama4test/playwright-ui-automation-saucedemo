import { test, expect } from './baseTest'; // ✅ use custom baseTest

test.describe('Login Tests', () => {
  // ✅ Session test that reuses storage state
  test('@session Uses saved login state to access inventory', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
  });

  // ✅ Manual login test
//   test('@smoke Valid login manually', async ({ loginPage }) => {
//     await loginPage.goto();
//     await loginPage.login(process.env.TEST_USER!, process.env.TEST_PASS!);
//     await loginPage.assertLoginSuccess();
//   });

  // ❌ Negative test, must go through login
  test('Invalid login', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.assertLoginFailure();
  });
});
