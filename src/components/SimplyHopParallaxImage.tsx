"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SimplyHopParallaxImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start animating right as the top of our tracking area hits the top of the browser
        // Finish animating exactly when the bottom of our tracking area hits the bottom
        offset: ["start start", "end end"],
    });

    // CINEMATIC LETTERBOX REVEAL:
    // We start with a heavy vertical crop (like a 2.35:1 movie aspect ratio or narrower) across the center.
    // The visual effectively starts looking like `inset(30% 0% 30% 0%)`
    // As the user scrubs through the 250vh runway, the "curtains" open vertically to 0%.
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(35% 0% 35% 0%)", "inset(0% 0% 0% 0%)"]
    );

    // PARALLAX INTERIORS:
    // As the letterbox opens, the image inside slowly zooms out AND shifts downward slightly, 
    // creating a profound sense of depth and uncovering.
    const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
    const yParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);

    return (
        // The outer container dictates how LONG the user has to scroll to finish the animation
        // 250vh gives a beautiful, deliberate pacing to the curtain reveal
        <div ref={containerRef} className="w-full relative h-[250vh] bg-[#0A0A0A]">

            {/* STICKY CONTAINER: Locks to the viewport so the letterbox opens exactly over the user's screen */}
            <div className="w-full h-screen sticky top-0 flex justify-center items-center overflow-hidden">

                <motion.div
                    style={{ clipPath }}
                    className="w-full h-full absolute inset-0 bg-zinc-900"
                >
                    <motion.img
                        src="/simplyhop-4-1.png"
                        alt="Colleagues commuting together"
                        className="absolute inset-0 w-full h-full object-cover origin-center"
                        style={{
                            scale,
                            y: yParallax
                        }}
                    />
                </motion.div>

                {/* Optional subtle dark overlay that fades out as the image is revealed, increasing immersion */}
                <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0])
                    }}
                />
            </div>

        </div>
    );
}
