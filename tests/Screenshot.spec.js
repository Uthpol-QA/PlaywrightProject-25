const { test, expect } = require('@playwright/test')

//code level screenshot

test('screenshot page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    //taking screenshot of visible page

    // await page.screenshot({ path: 'HomePage.png' }) //default path

    await page.screenshot({ path: 'tests/Screenshots/' + Date.now() + 'HomePage.png' }) //custom path, with date
})


test('screenshot full page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot({ path: 'tests/Screenshots/' + Date.now() + 'FullHomePage.png', fullPage: true })

})

test('screenshot element', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForSelector("//*[@id='tbodyid']/div[1]") //wait for image to load

    await page.locator("//*[@id='tbodyid']/div[1]").screenshot({ path: 'tests/Screenshots/' + Date.now() + 'Samsung Galaxy S6.png' })

})

/*
Playwright has built-in screenshot options.
Go to ‘playwright.config.js’ → look for the "Use" block, and add followings:
screenshot:'on'

//Screenshot Path: playwright-report\data\Scrsht1.png
*/