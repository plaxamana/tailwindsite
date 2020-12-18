const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["src/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
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