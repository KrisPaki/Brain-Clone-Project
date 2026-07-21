import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL ?? "http://localhost:21971";
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  retries: 0,
  reporter: "list",
  use: {
    baseURL,
    headless: true,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: isCI
      ? "pnpm run build && pnpm run serve"
      : "pnpm run dev",
    url: baseURL,
    reuseExistingServer: !isCI,
    timeout: 90_000,
  },
});
