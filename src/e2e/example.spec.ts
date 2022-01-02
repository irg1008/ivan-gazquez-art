import { test, expect } from '@playwright/test'

test('should navigate to the main page', async ({ page }) => {
	await page.goto('/404')
	await expect(page.locator('h1')).toContainText('404')
})
