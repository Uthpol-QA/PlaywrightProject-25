const {test, expect} = require('@playwright/test');

test('frames', async ({page}) =>{

await page.goto('https://ui.vision/demo/webtest/frames/')

//total number of frames
const allframes = await page.frames()
console.log('Number of frames: ',allframes.length)

//1) using name or url
//const var1 = await page.frame('Name')  //by name
const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
await frame1.fill("//*[@name='mytext1']", 'Hi')


//2) using frame locator
const inputbox = await page.frameLocator("//frameset//frameset//frame[1]").locator("[name='mytext2']")
await inputbox.fill("Hey")


await page.waitForTimeout(5000);

})