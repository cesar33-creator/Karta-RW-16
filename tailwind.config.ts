// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            // Menggunakan variabel CSS yang didefinisikan di globals.css
            maroon: {
            primary: "var(--maroon-primary)",
            },
        },
        },
    },
    plugins: [],
};
export default config;