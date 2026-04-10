/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                premium: {
                    maroon: "#4A0E0E",
                    gold: "#D4AF37",
                    goldLight: "#F1D592",
                    purple: "#3B1E54",
                    ivory: "#F9F6EE",
                    dark: "#1A0F0F",
                }
            },
            fontFamily: {
                playfair: ["'Playfair Display'", "serif"],
                inter: ["'Inter'", "sans-serif"],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
