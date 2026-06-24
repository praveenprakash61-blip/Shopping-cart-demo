import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    readonly cartOpenButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.checkoutButton =
            page.getByRole('button', { name: 'Checkout' });

        this.cartOpenButton =
            page.locator('button', {
                has: page.locator('[title="Products in cart quantity"]')
            }).first();
    }

    private get cartContainer() {
        return this.page.locator('div', {
            has: this.checkoutButton,
            hasText: 'Cart'
        }).first();
    }

    private get cartItems() {
        return this.cartContainer.locator('xpath=.//button[@title="remove product from cart"]/parent::div');
    }

    private get quantityLabels() {
        return this.cartItems.locator('text=Quantity:');
    }

    private get subtotalAmount() {
        return this.cartContainer.locator('p', { hasText: '$' }).last();
    }

    private async ensureCartOpen() {
        if (await this.cartContainer.count() === 0) {
            await this.cartOpenButton.click();
            await expect(this.checkoutButton).toBeVisible();
        }
    }

    async verifyProducts(products: string[]) {

        await this.ensureCartOpen();
        const cartText = await this.cartContainer.textContent();

        for (const product of products) {
            expect(cartText).toContain(product);
        }
    }

    async verifyCartCount(expectedCount: number) {
        await this.ensureCartOpen();

        await expect(this.cartItems)
            .toHaveCount(expectedCount);
    }

    async verifyProductPrice(price: string) {

        await this.ensureCartOpen();

        const normalizedTarget = price.replace(/\s+/g, '');
        const priceText = await this.cartItems
            .locator('p', { hasText: '$' })
            .allTextContents();

        const matches = priceText
            .map(p => p.replace(/\s+/g, ''))
            .some(p => p.includes(normalizedTarget));

        expect(matches).toBe(true);
    }

    async verifyQuantity(expectedQuantity: number) {
        await this.ensureCartOpen();

        const quantities =
            await this.quantityLabels.allTextContents();

        expect(quantities.length).toBeGreaterThan(0);

        for (const qty of quantities) {

            expect(qty)
                .toContain(`Quantity: ${expectedQuantity}`);
        }
    }

    async verifyTotal(total: string) {
        await this.ensureCartOpen();

        await expect(this.cartContainer)
            .toContainText(`$ ${total}`);
    }
}