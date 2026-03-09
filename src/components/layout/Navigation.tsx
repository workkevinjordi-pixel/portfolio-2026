"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-8 lg:px-[170px] flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-black/10 backdrop-blur-md [@supports(backdrop-filter:blur(0px))]:bg-black/20 py-4 md:py-4 lg:py-4 border-b border-border" : "bg-transparent mix-blend-difference"
                }`}
        >
            <Link href="/" className="font-medium text-sm tracking-wide text-white">
                Kevin Jordi
            </Link>
            <div className="flex gap-8 text-sm text-muted">
                <Link href="#about" className="nav-link">
                    About
                </Link>
                <Link href="#work" className="nav-link">
                    Work
                </Link>
                <a
                    href="https://www.linkedin.com/in/kevinjordi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                >
                    LinkedIn
                </a>
            </div>
        </nav>
    );
}
