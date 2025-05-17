exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.allProducts = "//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartBtn = "//a[normalize-space()='Add to cart']";
        this.cartLink = "//a[@id='cartur']";
    }

    async addProductToCart(productName) {
        const products = await this.page.$$(this.allProducts);

        for (const product of products) {
            const name = (await product.textContent()).trim();
            if (name === productName) {
                await product.click();
                break;
            }
        }

        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.page.locator(this.addToCartBtn).click();
    }

    async goToCart() {
        await this.page.locator(this.cartLink).click();
    }
}
