const { test, expect } = require('@playwright/test');

test('inner frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Access frame3 by URL
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    if (!frame3) throw new Error('Frame 3 not found'); //err handle

    // Fill input box in frame3
    await frame3.locator('[name="mytext3"]').fill('hello');

    // Access nested child frame inside frame3
    const innerFrame = frame3.childFrames()[0];
    
    if (innerFrame.length === 0) throw new Error('No child frames found inside frame3'); //err handle

    // Select the radio button
    const radioBtn = innerFrame.locator("//*[@class='AB7Lab Id5V1']").first();
    await radioBtn.check();

    // Soft assert radio button is checked
    await expect.soft(radioBtn).toBeChecked();

    // Optional delay to view result
    await page.waitForTimeout(5000);

})