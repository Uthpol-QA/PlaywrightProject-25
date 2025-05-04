import { test, expect } from '@playwright/test'
import { assert } from 'console';

test('Soft Assert', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    /*
        //hard assert
    
        await expect(page).toHaveTitle('STORE123');
        await expect(page).toHaveURL('https://www.demoblaze.com/');
        await expect(page.locator("//*[@id='nava']")).toBeVisible();
    */

    //Soft assert

    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator("//*[@id='nava']")).toBeVisible();

})