exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.url = 'https://www.demoblaze.com/index.html';
        this.loginLink = "//*[@id='login2']";
        this.usernameInput = "//*[@id='loginusername']";
        this.passwordInput = "//*[@id='loginpassword']";
        this.loginButton = "//button[normalize-space()='Log in']";
        this.logoutButton = "//*[@id='logout2']";
    }

    async goToLoginPage() {
        await this.page.goto(this.url);
    }

    async login(userName, password) {
        await this.page.locator(this.loginLink).click();

        await this.page.locator(this.usernameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();

        await this.page.waitForSelector(this.logoutButton);
    }
}
