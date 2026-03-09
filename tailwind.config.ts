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
                background: '#000000',
                foreground: '#FFFFFF',
                muted: '#B3B3B3',
                border: 'rgba(255,255,255,0.08)',
                teal: '#2A5A58',
                lime: '#C0D100',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-dm-serif)', 'serif'],
            },
            animation: {
                'ambient-pulse': 'ambient-pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'ambient-pulse': {
                    '0%, 100%': { opacity: '0.12' },
                    '50%': { opacity: '0.06' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
