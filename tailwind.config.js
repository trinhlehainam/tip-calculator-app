module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "strong-cyan": "hsl(172, 67%, 45%)",
                "very-dark-cyan": "hsl(183, 100%, 15%)",
                "dark-grayish-cyan": "hsl(186, 14%, 43%)",
                "light-grayish-cyan": "hsl(185, 41%, 84%)",
            },
        },
        fontFamily: {
            "SpaceMono": ["Space Mono"],
        }
    },
    plugins: [],
}
