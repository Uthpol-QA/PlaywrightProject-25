const { test, expect } = require('@playwright/test');

test('handle table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //selecting table
    const table = await page.locator("//*[@id='productTable']")

    //1) total number of rows & columns

    const columns = await table.locator("//thead//tr//th")

    console.log('number of columns: ', await columns.count())

    expect.soft(await columns.count()).toBe(4)


    const rows = await table.locator("//tbody//tr")

    console.log('number of rows: ', await rows.count())

    expect.soft(await rows.count()).toBe(5)



    //2) filter a product based on name, select checkbox for Smartwatch

    const matchedRow = await rows.filter({
        has: page.locator("//td"),
        hasText: 'Smartwatch'
    })

    await matchedRow.locator('//input').check()


    // Soft assert radio button is checked
    const chkbtn = await matchedRow.locator('//input')
    await expect.soft(chkbtn).toBeChecked();



    //3) reusable functions for autoselect multi product
    await selectProduct(rows, page, 'Laptop')
    await selectProduct(rows, page, 'Wireless Earbuds')


    //4) all product details print, using loop

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i)
        const tds = row.locator("//td")


        //for (let j = 0; i < await columns.count(); j++) {
        //info: colums.count() replaced with tds.count() & -1 = no need last
        for (let j = 0; j < await tds.count() - 1; j++) {

            console.log(await tds.nth(j).textContent())
        }

    }

    //5) read data from multipages, pagination

    //count nuber of pages

    const pages = await page.locator("//*[@class='pagination']//li//a")
    const totalPages = await pages.count();

    console.log('number of pages in table: ', totalPages);

    for (let p = 0; p < totalPages; p++) {

        if (p > 0) {
            await pages.nth(p).click();
            await page.waitForLoadState(); // wait for content to load
        }

        //copy from 4)
        for (let i = 0; i < await rows.count(); i++) {

            const row = rows.nth(i)
            const tds = row.locator("td")

            for (let j = 0; j < await tds.count() - 1; j++) {

                const text = await tds.nth(j).textContent()
                console.log(text?.trim()); 
                //?.: optional chaining
                // trim(): removes any white space and if text is null, return undefined
            }
        }

        await page.waitForTimeout(2000);

    }

    await page.waitForTimeout(3000);

});


//reusable function, 3)
async function selectProduct(rows, page, name) {

    const matchedRow = await rows.filter({
        has: page.locator("//td"),
        hasText: name
    })

    await matchedRow.locator('//input').check()
}