const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../Pages/LoginPage');
const { HomePage } = require('../Pages/HomePage');
const { CartPage } = require('../Pages/CartPage');

test('Handle Failed Test', async ({ page }) => {

    //login
    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.login('john321sell@proton.me', '1234567');

    //home
    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');

    await page.waitForTimeout(2000);  // small wait to ensure dialog resolves
    await home.goToCart();
    await page.waitForSelector('//tbody/tr');  // Wait until cart table rows are visible

    //cart
    const cart = new CartPage(page);
    const status = await cart.checkProductInCart('Nexus 6');

    // Screenshot on fail
    if (!status) {
        await page.screenshot({ path: 'cart_debug.png', fullPage: true });
    }

    expect(status).toBe(true);
});