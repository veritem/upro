module.exports = {
    purge:
    {
        enabled: true,
        content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    },
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                primary: ['Inter', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
