const { test, expect } = require('@playwright/test')

test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1) direct fill
    await page.locator("//*[@id='datepicker']").fill("04/07/2025");

    //2) date picker element

    const year = "2026"
    const month = "March"
    const date = 25

    //clicking Date picker 1 field
    await page.locator("//*[@id='datepicker']").click();

    //using while loop

    while (true) {

        const currentYear = await page.locator("//*[@class='ui-datepicker-year']").textContent();
        const currentMonth = await page.locator("//*[@class='ui-datepicker-month']").textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        //await page.locator("//*[@class='ui-icon ui-icon-circle-triangle-w']").click(); //previous btn
        await page.locator("//*[@class='ui-icon ui-icon-circle-triangle-e']").click(); //next btn

    }

    //a) selecting day using loop
    const dates = await page.$$("//*[@class='ui-state-default']") //all dates

    // for (const dt of dates) {
    //     if (await dt.textContent() == date) {
    //         await dt.click()
    //         break;
    //     }
    // }


    //b) direct selection, no loop

    //added on xpath: [text()='25']
    //await page.locator("//*[@class='ui-state-default'][text()='25']").click();

    //removing hard codeing, using ` & ${date}
    await page.locator(`//*[@class='ui-state-default'][text()='${date}']`).click();


    await page.waitForTimeout(3000)

})