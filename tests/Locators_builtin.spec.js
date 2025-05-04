import { test, expect } from '@playwright/test'

/*
page.getByRole() - to locate by explicit and implicit accessibility attributes.
page.getByText() - to locate by text content.
page.getByLabel() - to locate a form control by associated label's text.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByTitle() - to locate an element by its title attribute.
page.getByTestId() - to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Built-inLocators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //locate an input by placeholder
    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    //locate by explicit and implicit accessibility attributes
    await page.getByRole('button', { type: 'submit' }).click();  //button or, link

    let userName = await page.getByText('manda user'); //name is dynamic here
    await expect(userName).toBeVisible();

    //to handle dynamic name
    const userNameXpath = await page.locator("//*[@class='oxd-userdropdown-name']").textContent();
    console.log("Current user Name: ", userNameXpath);

    await expect(await page.getByText(userNameXpath)).toBeVisible();

});