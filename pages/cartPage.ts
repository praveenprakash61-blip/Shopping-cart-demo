import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class CartPage extends BasePage {

    readonly checkoutButton: Locator;
    readonly cartOpenButton: Locator;

    constructor(page: Page) {
        super(page);

        this.checkoutButton = page.getByRole('button', {
            name: 'Checkout'
        });

        this.cartOpenButton = page.locator('button', {
            has: page.locator('[title="Products in cart quantity"]')
        }).first();
    }

    private get cartContainer(): Locator {
        return this.page.locator('div', {
            has: this.checkoutButton,
            hasText: 'Cart'
        }).first();
    }

    private get cartItems(): Locator {
        return this.cartContainer.locator(
            'xpath=.//button[@title="remove product from cart"]/parent::div'
        );
    }

    private get quantityLabels(): Locator {
        return this.cartItems.locator('text=Quantity:');
    }

    private async ensureCartOpen(): Promise<void> {

        if (await this.cartContainer.count() === 0) {

            await this.click(this.cartOpenButton);

            await this.waitForVisible(this.checkoutButton);
        }
    }

    async verifyProducts(products: string[]): Promise<void> {

        await this.ensureCartOpen();

        const cartText = await this.getText(this.cartContainer);

        for (const product of products) {
            expect(cartText).toContain(product);
        }
    }

    async verifyCartCount(expectedCount: number): Promise<void> {

        await this.ensureCartOpen();

        await this.verifyCount(this.cartItems, expectedCount);
    }

    async verifyProductPrice(expectedPrice: string): Promise<void> {

        await this.ensureCartOpen();

        const normalizedExpected = expectedPrice.replace(/\s+/g, '');

        const prices = await this.cartItems
            .locator('p', { hasText: '$' })
            .allTextContents();

        const found = prices
            .map(price => price.replace(/\s+/g, ''))
            .some(price => price.includes(normalizedExpected));

        expect(found).toBeTruthy();
    }

    async verifyQuantity(expectedQuantity: number): Promise<void> {

        await this.ensureCartOpen();

        const quantities = await this.quantityLabels.allTextContents();

        expect(quantities.length).toBeGreaterThan(0);

        for (const quantity of quantities) {
            expect(quantity).toContain(`Quantity: ${expectedQuantity}`);
        }
    }

    async verifyTotal(expectedTotal: string): Promise<void> {

        await this.ensureCartOpen();

        await this.verifyContainsText(
            this.cartContainer,
            `$ ${expectedTotal}`
        );
    }
}