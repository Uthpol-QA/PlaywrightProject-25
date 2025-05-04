const {test, expect} = require ('@playwright/test')

test('TestName', async ({ page }) => {

    await page.goto('URL');




    await page.waitForTimeout(3000);
})