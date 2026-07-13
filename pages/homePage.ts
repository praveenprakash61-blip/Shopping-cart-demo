import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class HomePage extends BasePage {

    readonly productCards: Locator;
    readonly closeCartButton: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        super(page);

        this.productCards = page.locator('div[tabindex="1"]', {
            has: page.getByRole('button', { name: 'Add to cart' })
        });

        this.addToCartButton = page.getByRole('button', {
            name: 'Add to cart'
        }).first();

        this.closeCartButton = page.locator('button', {
            hasText: 'X'
        }).first();
    }

    async navigate(): Promise<void> {

        await super.navigate('/');

        await this.waitForPageLoad();

        await this.waitForVisible(this.addToCartButton);
    }

    async addProductsByPrice(targetPrice: string): Promise<string[]> {

        const selectedProducts: string[] = [];

        const totalProducts = await this.productCards.count();

        for (let index = 0; index < totalProducts; index++) {

            const card = this.productCards.nth(index);

            const productPrice = await this.getProductPrice(card);

            if (productPrice !== targetPrice) {
                continue;
            }

            const productName = await this.getProductName(card);

            selectedProducts.push(productName);

            await this.addProductToCart(card);

            await this.closeMiniCart();
        }

        return selectedProducts;
    }

 

    private async getProductName(card: Locator): Promise<string> {

        return await this.getText(
            card.locator('p').first()
        );
    }

    private async getProductPrice(card: Locator): Promise<string> {

        return await this.getText(
            card.locator('p').nth(1)
        );
    }

    private async addProductToCart(card: Locator): Promise<void> {

        await this.click(
            card.getByRole('button', {
                name: 'Add to cart'
            })
        );
    }

    private async closeMiniCart(): Promise<void> {

        if (await this.isVisible(this.closeCartButton)) {
            await this.click(this.closeCartButton);
        }
    }
}