"use client";

import { motion } from "framer-motion";

export default function OmniaBentoOverlay() {
    return (
        <div className="absolute inset-0 w-full h-full p-6 md:p-12 lg:p-16 flex flex-col justify-end items-start pointer-events-none">

            {/* The notifications wrap */}
            <div className="flex flex-col gap-3 md:gap-4 w-[280px] sm:w-[320px] md:w-[400px]">

                {/* 3 Staggered Notifications */}
                {[1, 2, 3].map((i, index) => (
                    <motion.img
                        key={`notification-${i}`}
                        src={`/omnia-svg-notification-${i}.svg`}
                        alt={`Omnia Notification ${i}`}
                        className="w-full h-auto drop-shadow-xl rounded-2xl"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1], // Custom springy ease
                            delay: 0.2 + (index * 0.15) // Staggered delay
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    />
                ))}

                {/* Animated Gradient Border Chatbot Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2 + (3 * 0.15) // Appears after notifications
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-2"
                >
                    <div className="relative p-[2px] rounded-full overflow-hidden w-full group">
                        {/* The rotating gradient layer - Oversized square so it doesn't warp into an oval */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -ml-[400px] -mt-[400px] opacity-100"
                            style={{
                                background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, #FF6B6B 85%, #2563EB 100%)"
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* The actual SVG rendered over the gradient mask */}
                        <div className="relative w-full rounded-full overflow-hidden bg-white">
                            <img
                                src="/omnia-svg-chatbot.svg"
                                alt="AI Chat Bot"
                                className="w-full h-auto relative z-10 block"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
