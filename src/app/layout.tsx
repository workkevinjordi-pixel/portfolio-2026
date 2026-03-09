import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { BackgroundGradients } from "@/components/layout/BackgroundGradients";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const dmSerif = DM_Serif_Display({ weight: ['400'], subsets: ["latin"], variable: '--font-dm-serif' });

export const metadata: Metadata = {
    title: "Kevin Jordi - Product Design Lead",
    description: "Product Design Lead working across Web3, mobility, energy, fintech, and AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${dmSerif.variable} font-sans selection:bg-white selection:text-black`}>
                <BackgroundGradients />
                <Navigation />
                {children}

                <Script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js" strategy="beforeInteractive" />
                <Script id="lenis-init" strategy="lazyOnload">
                    {`
                        window.addEventListener('DOMContentLoaded', () => {
                            if (typeof Lenis !== 'undefined') {
                                const lenis = new Lenis({
                                    autoRaf: true,
                                    duration: 1.2,
                                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                                });
                            }
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
