const { test, expect } = require('@playwright/test')

test('Drag And Drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const rome = await page.locator("//*[@id='box6']")
    const italy = await page.locator("//*[@id='box106']")

    //approach 1
    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()

    await page.waitForTimeout(3000);



    //approach 2
    const Washington = await page.locator("//*[@id='box3']")
    const UnitedStates = await page.locator("//*[@id='box103']")

    await Washington.dragTo(UnitedStates)

    await page.waitForTimeout(3000);

})