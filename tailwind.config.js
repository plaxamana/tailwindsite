const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["src/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif']
        },
        extend: {
            colors: {
                teal: colors.teal,
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}