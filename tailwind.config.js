module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                lg: '0',
            },
        },
        fontFamily: {
            primary: 'Rubik',
        },
        extend: {
            colors: {
                darkblue: {
                    DEFAULT: '#0D0D2B',
                    secondary: '#252540',
                },
                blue: {
                    DEFAULT: '#3671E9',
                    hover: '#2766E6',
                },
                gray: {
                    DEFAULT: '#E0E0E0',
                },
                violet: '#2B076E',
                white: '#ffffff',

                primary: '#FFA100',
                secondary: '#FB7022',
                tertiary: '#FB7022',
                black: '#231714',
                orange: '#F5846A',
                forange: '#FBA122'
            },
            boxShadow: {
                primary: '0px 20px 200px rgba(57, 23, 119, 0.05)',
            },
            backgroundImage: {
                newsletter: "url('/src/assets/img/newsletter-bg.png')",
                pattern: "url('/src/assets/img/bg-pattern.jpg')",
                yoga: "url('/src/assets/img/bg-yoga-class.jpg')",
                fitness: "url('/src/assets/img/bg-fitness-class.jpg')",
                ride: "url('/src/assets/img/bg-ride-class.jpg')",
                boxing: "url('/src/assets/img/boxing-class.jpg')",
                newsletterBox: "url('/src/assets/img/newsletter-box.png')",
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
        },
    },
    plugins: [],
};