import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifyProducts(products: string[]) {

        for (const product of products) {

            await expect(this.page.locator('body'))
                .toContainText(product);
        }
    }

    async verifyCartCount(count: number) {

        await expect(this.page.locator('body'))
            .toContainText(`${count}`);
    }

    async verifyTotal(total: string) {

        await expect(this.page.locator('body'))
            .toContainText(`$ ${total}`);
    }
}