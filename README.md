# 🎭 Playwright UI Automation – SauceDemo Project

This repository contains automated UI tests for the [SauceDemo](https://www.saucedemo.com/) application using **Playwright** and **TypeScript**.

The project supports:
- ✅ Page Object Model (POM) architecture
- 🌐 Environment-based test data via `.env`
- 🧪 Parallel test execution
- 🐳 Docker support for isolated test runs
- 🔁 CI/CD integration with Jenkins using GitHub webhooks
- 📸 Debugging assets: trace, screenshots, and optional video

---

## 📁 Project Structure

.
├── tests/ # Test cases (e.g., login.spec.ts)
├── pages/ # Page Object classes
├── utils/ # Reusable helpers, global setup
├── .env # Environment variables
├── Dockerfile # Docker setup for containerized runs
├── package.json # NPM dependencies & scripts
├── playwright.config.ts # Playwright configuration
└── README.md # Project info


---

## 🚀 Getting Started

### 🖥️ Run Locally

1. Install dependencies

```bash
npm ci
```
2. Run Tests
```bash
npx playwright test
```
🐳 Run with Docker
Build the Docker image:

```bash
docker build -t playwright-tests .
```
Run the tests inside a container:

```bash
docker run -it playwright-tests
```
ℹ️ This uses the official mcr.microsoft.com/playwright base image with Chromium pre-installed.

⚙️ .env File Example
Environment variables are loaded using dotenv. Create a .env file in the root with the following:

```bash
BASE_URL=https://www.saucedemo.com
TEST_USER=standard_user
TEST_PASS=secret_sauce
```

🧪 Example Test Case

Located in tests/login.spec.ts:

```bash
test('Login with valid credentials', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await page.fill('#user-name', process.env.TEST_USER!);
  await page.fill('#password', process.env.TEST_PASS!);
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
});
```

🤖 CI/CD – Jenkins Integration

CI/CD is configured via GitHub webhook triggering Jenkins.

Jenkins job runs tests when new code is pushed.

Jenkins is currently not containerized, but can optionally run Dockerized tests for consistent environments.

🔍 Debugging Failed Tests
On failures, Playwright captures:

✅ Trace files

✅ Screenshots

❌ (Optional) Videos – can be enabled in config

To view trace of a failed test:

```bash
npx playwright show-trace test-results/<test-name>/trace.zip
```

📦 Tech Stack

Playwright

Node.js

TypeScript

Docker

Jenkins

dotenv

🙋‍♂️ Author
Osama Bin Rashid
QA Automation Engineer
📧 osama.qa.dev@gmail.com
