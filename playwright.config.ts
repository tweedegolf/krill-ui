import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests/pw',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',

  use: {
    trace: 'retain-on-failure',
    baseURL: 'http://localhost:5173',
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
    viewport: {
      width: 1600,
      height: 800,
    },
    storageState: {
      cookies: [],
      origins: [
        {
          origin: 'http://localhost:5173',
          localStorage: [
            {
              name: 'krill',
              value: '{"ca":"tg","locale":"en","userDetails":{"id":"admin_token","attributes":{"role":"admin"}}}'
            }
          ]
        }
      ]
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ]
};

export default config;
