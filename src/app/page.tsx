import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[170px] relative overflow-hidden">
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ProcessSection />
            <ContactSection />

            <footer className="py-12 border-t border-border text-center relative z-10 w-full mb-12">
                <div className="flex flex-col gap-4">
                    <p className="font-serif text-xl">Portfolio of Kevin Jordi</p>
                    <p className="text-muted text-xs tracking-widest uppercase opacity-60">Clear. Scalable. Intentional Product Experience.</p>
                </div>
            </footer>
        </main>
    );
}
