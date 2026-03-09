"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function OmniaHorizontalScroll() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // We start the slide when the top of the element hits 85% of the viewport.
        // This is earlier than "end end", but it dramatically increases the vertical
        // tracking distance which mathematically forces the horizontal scroll to be much slower!
        // We finish the slide exactly when the top hits 90px (just before the navbar).
        offset: ["start 85%", "start 90px"]
    });

    // Animate smoothly across the vertical ascending journey.
    // We add a massive 60% dead-zone at the start so the first card enters the screen vertically
    // and is perfectly readable for an extended time before it begins sliding horizontally.
    // It finishes at 90% to guarantee the third card is reached before the navbar.
    const x = useTransform(scrollYProgress, [0, 0.6, 0.9], ["0%", "0%", "-66.66%"]);

    return (
        <div ref={targetRef} className="relative w-full overflow-hidden pb-16">
            <div className="w-full h-auto flex items-center">
                {/* ml-[10vw] md:ml-[25vw] aligns the first card precisely in the center before scrolling begins */}
                <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-6 shrink-0 w-[200vw] sm:w-[150vw] md:w-[120vw] ml-[7.5vw] md:ml-[25vw] lg:ml-[30vw]">
                    {/* Card 1 */}
                    <div className="shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] max-w-[600px]">
                        <img src="/omnia-2-1.png" alt="Social Media Integration" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] border border-white/5" />
                    </div>

                    {/* Card 2 */}
                    <div className="shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] max-w-[600px]">
                        <img src="/omnia-2-2.png" alt="Instant Booking" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] border border-white/5" />
                    </div>

                    {/* Card 3 */}
                    <div className="shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] max-w-[600px]">
                        <img src="/omnia-2-3.png" alt="Instant Reply 24/7" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] border border-white/5" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
