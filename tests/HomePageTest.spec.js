const { test, expect } = require('@playwright/test');


test('Home Page', async ({ page }) => {

    await page.goto('https://www.google.com');

    var pageTitle = await page.title();
    console.log('Page title is: ', pageTitle);

    var pageURL = await page.url();
    console.log('Page URL is: ', pageURL);

    await expect(page).toHaveTitle('Google');

    await expect(page).toHaveURL('https://www.google.com');


    await page.close();

})