exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.productNames = "//tbody/tr/td[2]";
    }

    async checkProductInCart(productName) {
        const products = await this.page.$$(this.productNames);

        // console.log("Checking for product:", productName);
        console.log(`Looking for product: "${productName}"`);
        for (const product of products) {
            const name = (await product.textContent()).trim();
            console.log(`Found in cart: "${name}"`);
            if (name === productName) {
                console.log('Product matched!');
                return true;
            }
        }

        console.log('Product not found!');
        return false;

    }
}
