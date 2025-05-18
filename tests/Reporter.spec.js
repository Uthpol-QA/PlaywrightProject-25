const { test, expect } = require('@playwright/test')

test('Test1', async ({ page }) => {

    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google")

})

test('Test2', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM12345")  //intentional fail

})

test('Test3', async ({ page }) => {

    await page.goto("https://www.orangehrm.com/")
    await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

})