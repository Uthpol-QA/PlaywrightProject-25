const { test, expect } = require('@playwright/test')

let page;

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('john321sell@proton.me')
    await page.locator('#loginpassword').fill('1234567')
    await page.locator("//button[normalize-space()='Log in']").click()

});

test.afterAll(async () => {

    //logout
    await page.locator('#logout2').click()

});


test('Home page', async () => {

    //Home page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)


    await page.waitForTimeout(3000);
})


test('Cart function', async () => {

    //add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    //Handle dialog
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()  //accepting
    })


    await page.waitForTimeout(3000);
})