import { test, expect } from '@playwright/test'

test('Handle Radio Buttons', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //RadioButton - female

    //select radio button
    await page.locator("//*[@id='gender-female']").check();
    //await page.check("//*[@id='gender-female']");

    //verify if checked or not
    await expect(await page.locator("//*[@id='gender-female']")).toBeChecked();

    //veryfy that Radiobutton is checked
    await expect(await page.locator("//*[@id='gender-female']").isChecked()).toBeTruthy();


    //verify negative if not checked
    await expect(await page.locator("//*[@id='gender-male']").isChecked()).toBeFalsy();


    await page.waitForTimeout(5000);  //pausing code

})