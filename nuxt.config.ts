import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
    vite: {
        plugins: [tailwindcss()],
    },
});
