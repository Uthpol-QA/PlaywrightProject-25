import { test, expect } from '@playwright/test'

test('AssertionTest', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // await expect(locator).toBeVisible()	Element is visible
    let logoElement = await page.locator("//*[@class='header-logo']")
    await expect(logoElement).toBeVisible()

    // await expect(locator).toBeEnabled()	Element is enabled
    let searchStoreBox = await page.locator("//*[@id='small-searchterms']")
    await expect(searchStoreBox).toBeEnabled()

    // await expect(locator).toBeDisabled()	Element is disabled


    // await expect(locator).toBeChecked()	Checkbox is checked
    //Radio button
    const maleRadioButton = await page.locator("//*[@id='gender-male']")
    await maleRadioButton.click()  //select radio button
    await expect(maleRadioButton).toBeChecked()

    //check box
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()


    // await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const registerButton = await page.locator("//*[@id='register-button']")
    await expect(registerButton).toHaveAttribute('type', 'submit')


    // await expect(locator).toHaveText()	Element matches text
    const registerText = await page.locator("//*[@class='page-title']//h1")
    await expect(registerText).toHaveText('Register')  //full text

    // await expect(locator).toContainText()	Element contains text
    await expect(registerText).toContainText('Regi')   //partial text


    // await expect(locator).toHaveValue()	Input has a value
    const emailInput = await page.locator("//*[@id='Email']")
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // await expect(locator).toHaveCount()	List has exact number of children
    const birthMonth = await page.locator("//*[@name='DateOfBirthMonth']//option")

    await expect(birthMonth).toHaveCount(13)


    
    //Negative matches --> .not.toHeaveTitle()

})