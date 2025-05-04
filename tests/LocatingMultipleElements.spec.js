import { test, expect } from '@playwright/test'

test('LocateMultipleElements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    /*
        //Capture all links
       let AllLinks= await page.$$('a');
    
       for(const link of AllLinks)
        {
            const linkText = await link.textContent(); //similar getText() in java
            console.log(linkText);
        }
    */

    //wait for selecter, sometimes not finding
    await page.waitForSelector("//*[@id='tbodyid']//div//h4//a");

    const products = await page.$$("//*[@id='tbodyid']//div//h4//a");

    for (const product of products) {

        const productName = await product.textContent();
        console.log(productName);
    }

})