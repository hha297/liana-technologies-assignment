/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4ca74e',
            },
            animation: {
                'spin-slow': 'spin 1.3s linear infinite',
            },
            screens: {
                '2xl-max': { max: '1535px' },
                'xl-max': { max: '1279px' },
                'lg-max': { max: '1040px' },
                'md-max': { max: '890px' },
                'sm-max': { max: '636px' },
                'mb-max': { max: '480px' },
                'lw-max': { max: '400px' },
                'xs-max': { max: '360px' },
                mb: 359,
            },
        },
    },
    plugins: [],
};
