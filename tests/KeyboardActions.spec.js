const { test, expect } = require('@playwright/test')

test('Keyboard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    //passing text
    await page.locator("//*[@name='text1']").fill("Hi there, I'm here!");

    //similar way
    // await page.type("//*[@name='text1']", "Hi there, I'm here!");

    //Press() for combination key, for mac --> 'Meta+A'
    //Ctrl+a
    await page.keyboard.press('Control+A');

    //ctrl+c
    await page.keyboard.press('Control+C');

    //tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //ctrl+v
    await page.keyboard.press('Control+V');


    await page.waitForTimeout(3000);
})