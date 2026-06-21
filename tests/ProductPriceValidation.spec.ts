import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import productData from '../testData/productData.json';

test('Add all products matching target price and validate cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // Navigate to application
    await homePage.navigate();

    // Add products matching target price
    const selectedProducts = await homePage.addProductsByPrice(
        productData.targetPrice
    );

    console.log('Selected Products:', selectedProducts);

    // Validate products were found
    expect(selectedProducts.length).toBeGreaterThan(0);

    // Validate product names in cart
    await cartPage.verifyProducts(selectedProducts);

    // Validate cart count
    await cartPage.verifyCartCount(selectedProducts.length);

    // Calculate expected subtotal
    const expectedTotal = (
        selectedProducts.length *
        Number(productData.targetPrice.replace('$', ''))
    ).toFixed(2);

    console.log('Expected Total:', expectedTotal);

    // Validate subtotal
    await cartPage.verifyTotal(expectedTotal);
});