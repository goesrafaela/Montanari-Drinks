/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFDE59', // Amarelo personalizado
                secondary: '#1A1A1A', // Preto personalizado
            },
            animation: {
                'hover-bounce': 'bounce 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
}