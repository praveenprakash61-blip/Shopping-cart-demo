import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly productCards: Locator;
    readonly closeCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCards =
            page.locator('div[tabindex="1"]', {
                has: page.getByRole('button', { name: 'Add to cart' })
            });
        this.closeCartButton =
            page.locator('button', { hasText: 'X' }).first();
    }

async navigate() {
    await this.page.goto('/');

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

        const mainPrice = await card.locator('p').nth(1).innerText();

        if (mainPrice.trim() === targetPrice) {

            const productName = (await card.locator('p').first().textContent())?.trim() || '';
            if (productName) {
                selectedProducts.push(productName);
            }

            await card.locator('button', { hasText: 'Add to cart' }).click();

            if (await this.closeCartButton.isVisible()) {
                await this.closeCartButton.click();
            }
        }
    }

        return selectedProducts; 
    }

}
