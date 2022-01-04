import { test, expect } from '@playwright/test'

test('should navigate to the main page', async ({ page }) => {
	await page.goto('/')
	await expect(page.locator('h2')).toContainText('Iván')
})
