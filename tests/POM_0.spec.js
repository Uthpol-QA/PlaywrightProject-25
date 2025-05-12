const { test, expect } = require('@playwright/test')

test('without POM', async ({ page }) => {
    //without page object model pattern
    await page.goto('https://www.demoblaze.com/index.html')

    await page.getByRole('link', { name: 'Log In' }).click()

    await page.locator('#loginusername').fill('john321sell@proton.me')
    await page.locator('#loginpassword').fill('1234567')

    await page.getByRole('button', { name: 'Log In' }).click()
    //validation
    await expect(page.locator('#logout2')).toBeVisible()

    await page.waitForTimeout(3000)
})