"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OscarFrankParallaxVideo() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Animation plays as the element scrolls through the viewport
        // Starts when the top of the element hits the top of the viewport
        // Ends when the bottom of the element exits the top of the viewport
        offset: ["start start", "end start"],
    });

    // Slow frame-in as user scrolls past
    const inset = useTransform(scrollYProgress, [0, 0.8], ["0px", "60px"]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["0px", "28px"]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1.1, 1]);

    return (
        // Just 100vh — no extra space, no sticky, no gap
        <div ref={containerRef} className="w-full relative h-screen overflow-hidden bg-[#050505]">
            <motion.div
                style={{
                    position: "absolute",
                    top: inset,
                    left: inset,
                    right: inset,
                    bottom: inset,
                    borderRadius,
                    overflow: "hidden",
                }}
            >
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 origin-center"
                >
                    <video
                        src="/oscarfrank-video-hero.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
