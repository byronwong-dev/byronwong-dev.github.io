/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Ubuntu", "Open Sans", "sans-serif"],
            sans: [...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};