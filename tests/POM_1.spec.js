const { test, expect } = require('@playwright/test')

import { Loginpage } from '../Pages/LoginPage';


test('with POM', async ({ page }) => {
    //login
    const Login = new Loginpage(page);  //creating new page object, passing same {page} arguments inside

    Login.goToLoginPage();  //calling method

    Login.login('john321sell@proton.me', '123456')

    await Login.page.waitForTimeout(3000)




    //home

    //cart



})