import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import productData from '../testData/productData.json';

test(
    'Add all products matching target price and validate cart',
    async ({ page }) => {

        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);

        await homePage.navigate();

        const selectedProducts =
            await homePage.addProductsByPrice(
                productData.targetPrice
            );

        if (selectedProducts.length === 0) {
            console.log(
                `No products found matching target price: ${productData.targetPrice}`
            );
            return;
        }

        console.log(
            'Selected Products:',
            selectedProducts
        );

        // Product names
        await cartPage.verifyProducts(
            selectedProducts
        );

        // Cart count
        await cartPage.verifyCartCount(
            selectedProducts.length
        );

        // Product price
        await cartPage.verifyProductPrice(
            productData.targetPrice
        );

        // Quantity
        await cartPage.verifyQuantity(1);

        // Total
        const expectedTotal = (
            selectedProducts.length *
            Number(
                productData.targetPrice.replace('$', '')
            )
        ).toFixed(2);

        console.log(
            'Expected Total:',
            expectedTotal
        );

        await cartPage.verifyTotal(
            expectedTotal
        );
    }
);