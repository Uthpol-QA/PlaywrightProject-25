import { test, expect } from '@playwright/test'

test('Handle InputBox', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //InputBox - firstname

    //Verify if inputbox is visible, enable, editable, and empty
    await expect(await page.locator("//*[@id='FirstName']")).toBeVisible();
    await expect(await page.locator("//*[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//*[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//*[@id='FirstName']")).toBeEnabled();

    //Passing keys
    await page.locator("//*[@id='FirstName']").fill('John');

    await page.waitForTimeout(5000);  //pausing code

})