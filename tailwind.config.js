module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}'
        ],
        options: {
            safelist: ['dark'] //specific classes
        }
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
