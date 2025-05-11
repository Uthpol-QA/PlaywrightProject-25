const { test, expect } = require('@playwright/test')

test('Test Record videos', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.getByRole('link', { name: 'Log In' }).click()
    await page.locator('#loginusername').fill('john321sell@proton.me')
    await page.locator('#loginpassword').fill('1234567')
    await page.getByRole('button', { name: 'Log In' }).click()

    await expect(page.locator('#ogout2')).toBeVisible() //intentionally failed

    await page.waitForTimeout(3000);
})

/*
Built in video record
Go to ‘playwright.config.js’ → look for the "Use" block, and add followings:
    video: 'on'

Has options: off, on, on-first-retry, only-on-failure, retain-on-failure, retry-with-video

Videos path: test-results\Videos-Test-Record-videos-chromium\video.webm
*/
