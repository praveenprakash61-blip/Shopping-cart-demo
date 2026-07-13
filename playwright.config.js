import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  use: {
    baseURL: 'https://react-shopping-cart-67954.firebaseapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
  ['html'],
  ['junit', { outputFile: 'test-results/results.xml' }]
]
  
});