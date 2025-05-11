const {test, expect} = require ('@playwright/test')

test('Trace a Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.getByRole('link', { name: 'Log In' }).click()
    await page.locator('#loginusername').fill('john321sell@proton.me')
    await page.locator('#loginpassword').fill('1234567')
    await page.getByRole('button', { name: 'Log In' }).click()

    await expect(page.locator('#logou2')).toBeVisible() //intentionally fail: '#logout2'

})