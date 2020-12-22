const colors = require('tailwindcss/colors')

module.exports = {
    important: true,
    purge: ["src/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
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