/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ["var(--font-lato)", "sans-serif"],
                lexend: ["var(--font-lexend)", "sans-serif"],
            },
            spacing: {
                section: "5.6vw",
            },
        },
        screens: {
            sm: "320px",
            md: "601px",
            lg: "901px",
            xl: "1201px",
        },
    },
    plugins: [],
};
