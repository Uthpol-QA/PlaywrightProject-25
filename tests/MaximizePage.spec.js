const { test, chromium } = require('@playwright/test');

test('maximize browser window', async () => {
    const browser = await chromium.launch({
        headless: false, // show the browser
    });

    const context = await browser.newContext({
        //viewport: null,              // allows full screen usage
        //deviceScaleFactor: 1         // must be set manually to avoid error
        viewport: { width: 1920, height: 1080 }  // manually set a big screen size

    });

    const page = await context.newPage();
    await page.goto('https://example.com');

    await page.waitForTimeout(10000);
    //await browser.close();
});