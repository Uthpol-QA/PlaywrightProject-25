// const {test, expect} = require ('@playwright/test')

import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    //click login btn --> property
    //await page.locator('locator').click();
    await page.click('id=login2');

    //userName  --> CSS
    //await page.locator('locator').fill('value');
    //await page.locator('locator').type('value');

    //await page.fill('locator', 'value');
    //await page.type('locator', 'value');

    await page.fill('#loginusername', 'john321sell@proton.me');

    //Pass  --> CSS with tag
    await page.fill("#loginpassword", '1234567');

    //login btn click  --> xpath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence  --> xpath
    let logoutlink = await page.locator("//a[@id='logout2']");
    await expect(logoutlink).toBeVisible();

    //close browser
    await page.close();

})
