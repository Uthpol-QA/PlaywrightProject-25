const { test, expect } = require('@playwright/test')

test('without POM', async ({ page }) => {
    //without page object model pattern
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//*[@name='username']").fill('Admin')
    await page.locator("//*[@name='password']").fill('admin123')
    await page.locator("//*[@type='submit']").click();


    // //validation
    await expect(page.locator("//p[normalize-space()='Time at Work']")).toBeVisible();


    await page.waitForTimeout(3000)

})