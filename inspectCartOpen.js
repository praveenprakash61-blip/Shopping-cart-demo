const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://react-shopping-cart-67954.firebaseapp.com');
  await page.waitForLoadState('networkidle');
  await page.locator('button:has-text("Add to cart")').first().click();
  await page.waitForTimeout(1000);
  const closeBtn = page.getByRole('button', { name: 'X' }).first();
  console.log('close count', await closeBtn.count(), 'visible', await closeBtn.isVisible());
  await closeBtn.click();
  await page.waitForTimeout(1000);
  const elements = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => {
        const text = el.textContent || '';
        return text.includes('Cart');
      })
      .map(el => ({
        tag: el.tagName,
        text: (el.textContent || '').trim().slice(0, 80),
        className: el.className,
        id: el.id,
        ariaLabel: el.getAttribute('aria-label'),
        role: el.getAttribute('role'),
        visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length),
        outer: el.outerHTML.slice(0, 300)
      }));
  });
  console.log(JSON.stringify(elements, null, 2));
  await browser.close();
})();
