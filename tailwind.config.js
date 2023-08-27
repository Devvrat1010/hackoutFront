/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 30s linear infinite",
            },
            keyframes: {
                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                bree: ["Bree Serif", "sans-serif"],
                Roboto: ["Roboto", "sans-serif"],
                "Roboto Slab": ["Roboto Slab", "sans-serif"],
            },
        },
    },
    plugins: [],
};