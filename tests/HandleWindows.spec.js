const { test, expect, chromium } = require('@playwright/test')

test('Handle windows/pages', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    //get total pages
    const allPages = context.pages();
    console.log("Total Number of Pages created: ", allPages.length)


    // Optional: navigate to a page
    await page1.goto("https://www.google.com");
    await expect(page1).toHaveTitle("Google")

    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page2).toHaveTitle("OrangeHRM")

})

test.only('Handle Multiple windows/pages', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent("page")

    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    //wait
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    //closing browser
    await browser.close();
})