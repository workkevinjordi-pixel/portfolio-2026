"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OscarShowcaseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Each product card floats at a different speed for depth
    const y1 = useTransform(scrollYProgress, [0, 1], [80, -60]);
    const y2 = useTransform(scrollYProgress, [0, 1], [120, -40]);
    const y3 = useTransform(scrollYProgress, [0, 1], [60, -80]);

    return (
        <div
            ref={sectionRef}
            className="max-w-[1240px] mx-auto px-6 pb-24 md:pb-32 relative"
        >
            {/* Main showcase image */}
            <div className="w-full rounded-[2rem] overflow-hidden bg-[#0a0a0a] relative z-10">
                <img
                    src="/oscar-5.png"
                    alt="Oscar & Frank Black Friday Campaign & Product Catalog"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Floating product cards — positioned around the main image */}
            {/* Product 1: bottom-left, slightly overlapping */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-8 -left-4 md:left-2 z-20 w-[140px] md:w-[180px] rounded-xl overflow-hidden shadow-2xl bg-white"
            >
                <img
                    src="/oscar-product-1.png"
                    alt="Oscar & Frank product"
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Product 2: bottom-center-right */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-16 right-[15%] md:right-[20%] z-20 w-[140px] md:w-[180px] rounded-xl overflow-hidden shadow-2xl bg-white"
            >
                <img
                    src="/oscar-product-2.png"
                    alt="Oscar & Frank product"
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Product 3: bottom-right, slightly overlapping */}
            <motion.div
                style={{ y: y3 }}
                className="absolute -bottom-4 -right-4 md:right-2 z-20 w-[140px] md:w-[180px] rounded-xl overflow-hidden shadow-2xl bg-white"
            >
                <img
                    src="/oscar-product-3.png"
                    alt="Oscar & Frank product"
                    className="w-full h-auto"
                />
            </motion.div>
        </div>
    );
}
