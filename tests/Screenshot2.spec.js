const { test, expect } = require('@playwright/test')

test('screenshot page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.getByRole('link', { name: 'Log In' }).click()
    await page.locator('#loginusername').fill('john321sell@proton.me')
    await page.locator('#loginpassword').fill('1234567')
    await page.getByRole('button', { name: 'Log In' }).click()

})


/*
Playwright has built in screenshot options.
Go to ‘playwright.config.js’ → look for the "Use" block, and add followings:
screenshot:'on'

//Screenshot Path: playwright-report\data\Scrsht1.png
*/