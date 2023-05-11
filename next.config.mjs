import "./app/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig =  {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en'
    },
	experimental: {
		typedRoutes: true,
		appDir: true,
	}
}


export default nextConfig;