import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    site: 'https://frankaldape.com',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'es',
                locales: {
                    es: 'es',
                    en: 'en',
                },
            },
        }),
        robotsTxt(),
    ],
});