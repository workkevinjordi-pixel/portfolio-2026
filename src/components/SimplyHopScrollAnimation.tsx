"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SimplyHopScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start animation when the container enters the bottom of the viewport
        // Finish when the container reaches the middle of the viewport
        offset: ["0 0.9", "0 0.4"],
    });

    // Left Image Animation: 
    // Start tucked behind center (x: 100% to the right) and scaled down slightly with a messy tilt
    const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "30%", "0%"]);
    const leftY = useTransform(scrollYProgress, [0, 0.5, 1], [40, -15, 0]);
    const leftRotate = useTransform(scrollYProgress, [0, 0.6, 1], [-15, 5, 0]);
    const leftOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
    const leftScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // Right Image Animation: 
    // Start tucked behind center (x: -100% to the left) and scaled down with opposite messy tilt
    const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "-30%", "0%"]);
    const rightY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 20, 0]);
    const rightRotate = useTransform(scrollYProgress, [0, 0.6, 1], [20, -8, 0]);
    const rightOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
    const rightScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // Center Image Animation:
    // Simply fades in and scales up slightly
    const centerScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const centerOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

    // Text Animation:
    // Starts pushed down and transparent, sliding up and fading in to look like it reveals from the center card.
    const textY = useTransform(scrollYProgress, [0.5, 0.9], [60, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

    return (
        <div ref={containerRef} className="w-full flex flex-col items-center">
            <div className="w-[100vw] flex flex-row justify-center items-center gap-6 lg:gap-10 mb-16 md:mb-24 relative left-[50%] right-[50%] -translate-x-[50%] px-4 sm:px-0 perspective-1000 z-10">
                {/* Left Image (Smaller, pushed left) */}
                <motion.div
                    style={{ x: leftX, y: leftY, rotate: leftRotate, opacity: leftOpacity, scale: leftScale }}
                    className="w-[45vw] md:w-[35vw] lg:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 absolute md:relative flex-shrink-0 z-0 origin-center"
                >
                    <img src="/simplyhop-3-1.jpg" alt="Cityscape Triumphal Arch" className="w-full h-full object-cover origin-right object-right" />
                </motion.div>

                {/* Center Image (Taller, Prominent, Fitted perfectly) */}
                <motion.div
                    style={{ scale: centerScale, opacity: centerOpacity }}
                    className="w-[50vw] md:w-[40vw] lg:w-[500px] rounded-[2rem] overflow-hidden bg-zinc-900 relative flex-shrink-0 z-10 shadow-2xl flex align-center justify-center transform-gpu"
                >
                    <img src="/simplyhop-3-2.png" alt="SimplyHop Route Map" className="w-full h-auto object-cover block" />
                </motion.div>

                {/* Right Image (Smaller, pushed right) */}
                <motion.div
                    style={{ x: rightX, y: rightY, rotate: rightRotate, opacity: rightOpacity, scale: rightScale }}
                    className="w-[45vw] md:w-[35vw] lg:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 absolute md:relative flex-shrink-0 z-0 origin-center"
                >
                    <img src="/simplyhop-3-3.JPEG" alt="City Aerial View" className="w-full h-full object-cover origin-left object-left" />
                </motion.div>
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="max-w-[1240px] w-full mx-auto px-6 flex justify-center relative z-0"
            >
                <p className="text-[#9a9a9a] text-[17px] md:text-[20px] font-light leading-[1.6] text-center max-w-2xl">
                    The early stages of the project were less about visual design and more about establishing the right product logic. How people discover rides, how trips are structured, and how drivers and passengers coordinate needed to feel natural from the first interaction.<br /><br />
                    While the interface continues to evolve, the underlying experience remains grounded in those original design decisions.
                </p>
            </motion.div>
        </div>
    );
}
