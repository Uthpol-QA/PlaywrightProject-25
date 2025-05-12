exports.Loginpage =
    // Login page need to access on another page --> so, "exports.Loginpage =" needed

    class Loginpage {

        constructor(page) {
            // Locators store in constructor
            this.page = page;
            this.loginLink = '#login2'
            this.usernameInput = '#loginusername'
            this.passwordInput = '#loginpassword'
            this.loginButton = "//button[normalize-space()='Log in']"
            this.logoutButton = '#logout2'
        }

        // No need to touch code
        async goToLoginPage() {
            await this.page.goto('https://www.demoblaze.com/index.html')    //go to url
        }

        async login(userName, password) {
            await this.page.locator(this.loginLink).click()
            await this.page.locator(this.usernameInput).fill(userName)
            await this.page.locator(this.passwordInput).fill(password)
            await this.page.locator(this.loginButton).click()

            await expect(page.locator(this.logoutButton).tobeVisible())
        }
    }