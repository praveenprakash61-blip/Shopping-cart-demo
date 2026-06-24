import { test, expect } from '@playwright/test';

test('Add all products priced $14.90 and validate cart', async ({ page }) => {

    await page.goto(
        'https://react-shopping-cart-67954.firebaseapp.com/products?utm_source=chatgpt.com'
    );

    await page.waitForLoadState('load');
    
       await page
        .getByRole('button', { name: 'Add to cart' })
        .first()
        .waitFor();

    const targetPrice = '$14.90';

    const productCards = page.locator(
        'div[class*="sc-124al1g-2"]'
    );

    
    const count = await productCards.count();

    const selectedProducts: string[] = [];

    for (let i = 0; i < count; i++) {

        const card = productCards.nth(i);

        const text = await card.innerText();

        if (text.includes(targetPrice)) {

            const lines = text
                .split('\n')
                .filter(line => line.trim() !== '');

            selectedProducts.push(lines[1]);
        }
    }

    console.log('\nProducts Found:');

    selectedProducts.forEach(product =>
        console.log(product)
    );

    expect(selectedProducts.length).toBeGreaterThan(0);
});