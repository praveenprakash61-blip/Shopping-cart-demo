import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly productCards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCards =
            page.locator('div[class*="sc-124al1g-2"]');
    }

async navigate() {
    await this.page.goto(
        'https://react-shopping-cart-67954.firebaseapp.com/'
    );

    await this.page.waitForLoadState('networkidle');

    await this.page
        .getByRole('button', { name: 'Add to cart' })
        .first()
        .waitFor();
}
async addProductsByPrice(targetPrice: string) {

    const selectedProducts: string[] = [];

    const count = await this.productCards.count();

    for (let i = 0; i < count; i++) {

        const card = this.productCards.nth(i);

        const text = await card.innerText();


        if (text.includes(targetPrice)) {

            const lines = text
                .split('\n')
                .filter(line => line.trim() !== '');

            selectedProducts.push(lines[1]);

            await card
                .getByRole('button', { name: 'Add to cart' })
                .click();
        }
    }
    return selectedProducts;
}
}