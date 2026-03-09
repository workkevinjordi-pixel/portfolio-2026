"use client";

import { motion } from "framer-motion";
import { RevealWrapper } from "../ui/RevealWrapper";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
    const words = ["Your Design Buddy", "Product Designer", "Design Lead", "UI/UX Designer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const currentWord = words[currentWordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                setCurrentText((prev) =>
                    isDeleting
                        ? prev.slice(0, -1)
                        : currentWord.slice(0, prev.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 relative z-10 px-6">



            <div className="w-full max-w-5xl flex flex-col justify-center">
                <div className="w-full relative mb-16 md:mb-24">
                    <RevealWrapper delay={0.1}>
                        <div className="flex items-baseline justify-between">
                            <span className="font-sans text-base md:text-xl tracking-normal text-muted mb-2 md:mb-4">Hi, I'm Kevin Jordi.</span>
                            <span className="hidden md:inline-block font-sans text-base md:text-xl tracking-normal text-muted">
                                {currentText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                    </RevealWrapper>
                    <h1 className="font-serif text-[57px] md:text-[84px] lg:text-[104px] leading-[0.85] tracking-tight">
                        <RevealWrapper delay={0.2}>
                            <span className="block">Building modern</span>
                        </RevealWrapper>
                        <RevealWrapper delay={0.3}>
                            <span className="block md:ml-[15%] text-muted opacity-80">digital products</span>
                        </RevealWrapper>
                        <RevealWrapper delay={0.4}>
                            <span className="block md:ml-[8%]">through structured,</span>
                        </RevealWrapper>
                        <RevealWrapper delay={0.5}>
                            <span className="block md:ml-[30%] lg:ml-[35%]">intentional design.</span>
                        </RevealWrapper>
                    </h1>
                </div>

                <div className="flex items-start gap-8 md:gap-12">
                    <motion.div
                        className="text-muted mt-1"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                    <RevealWrapper delay={0.6}>
                        <p className="text-muted text-sm md:text-base leading-relaxed max-w-sm border-l border-border pl-6">
                            Product Design Lead working across Web3, mobility, energy, fintech, and AI.
                        </p>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
