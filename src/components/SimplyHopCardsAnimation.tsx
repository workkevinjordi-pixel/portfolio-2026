"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SimplyHopCardsAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Each card reveals at a staggered scroll position
    const opacity1 = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
    const y1 = useTransform(scrollYProgress, [0.15, 0.3], [40, 0]);

    const opacity2 = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.4], [40, 0]);

    const opacity3 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const y3 = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);

    const cards = [
        { src: "/simplyhop-cards-1.png", opacity: opacity1, y: y1 },
        { src: "/simplyhop-cards-2.png", opacity: opacity2, y: y2 },
        { src: "/simplyhop-cards-3.png", opacity: opacity3, y: y3 },
    ];

    return (
        <div
            ref={containerRef}
            className="w-full bg-zinc-900 rounded-[2rem] relative overflow-hidden min-h-[400px] flex-1"
        >
            {/* Background image */}
            <img
                src="/simplyhop-4-3.png"
                alt="SimplyHop App Screen"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Cards that reveal on scroll, positioned top-left */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-col items-start gap-2 origin-top-left scale-50">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        style={{ opacity: card.opacity, y: card.y }}
                        className="rounded-xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={card.src}
                            alt={`SimplyHop card ${i + 1}`}
                            className="w-full h-auto"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
