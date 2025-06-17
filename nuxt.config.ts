import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            title: 'Application',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
            ],
        },
    },
});
