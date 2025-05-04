const { test, expect } = require('@playwright/test')

test('mouse hover', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    const user1 = await page.locator("(//*[@class='figure'])[1]")
    const user2 = await page.locator("(//*[@class='figure'])[2]")

    //mouse hover
    await user1.hover()
    await user2.hover()


    await page.waitForTimeout(3000);
})