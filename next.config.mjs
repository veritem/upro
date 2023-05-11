import "./app/env.mjs";

/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en'
    },
}
