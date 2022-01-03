import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	use: {
		trace: 'on-first-retry',
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'http://localhost:3000',
		locale: 'en',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
}
export default config
