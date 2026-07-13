import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({

    use: {

        baseURL: env.baseURL,

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure'
    },

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['html'],
        ['junit', { outputFile: 'test-results/results.xml' }]
    ]
});