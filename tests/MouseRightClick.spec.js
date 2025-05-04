const { test, expect } = require('@playwright/test')

test('context - Right click', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

    const btn = await page.locator("//*[@class='context-menu-one btn btn-neutral']")

    //right click
    await btn.click({ button: "right" })

    
    await page.waitForTimeout(3000);
})