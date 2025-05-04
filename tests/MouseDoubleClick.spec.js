const { test, expect } = require('@playwright/test')

test('double click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await btnCopy.dblclick()


    //Validation
    const field2 = page.locator("//*[@id='field2']")

    expect.soft(field2).toHaveValue("Hello World!")


    //print
    console.log(await field2.inputValue())
    //textContent() Doesn't Work on <input> Fields:
    //textContent() returns the text between the opening and closing tags of an element.
    //But <input> elements are self-closing and don’t have inner text.


    await page.waitForTimeout(3000);
})