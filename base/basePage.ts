import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }


    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

   
    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent())?.trim() ?? '';
    }

    async waitForVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }


    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }


    async verifyText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }


    async verifyContainsText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toContainText(expectedText);
    }

    async verifyCount(locator: Locator, expectedCount: number): Promise<void> {
        await expect(locator).toHaveCount(expectedCount);
    }


    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('load');
    }
}