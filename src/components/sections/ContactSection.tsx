import { RevealWrapper } from "../ui/RevealWrapper";

export function ContactSection() {
    return (
        <section className="py-24 md:py-40 border-t border-border mb-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <RevealWrapper>
                    <span className="text-label text-muted mb-6 block">04 — Contact</span>
                </RevealWrapper>

                <RevealWrapper delay={0.1}>
                    <h2 className="font-serif text-5xl md:text-7xl mb-6">Get in touch.</h2>
                </RevealWrapper>

                <RevealWrapper delay={0.2}>
                    <p className="text-muted text-lg mb-12 font-light text-balance">Reach out, and let's explore what's possible.</p>
                </RevealWrapper>

                <RevealWrapper delay={0.3}>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            className="inline-flex items-center justify-center px-8 py-3 border border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide"
                            href="mailto:work.kevinjordi@gmail.com"
                        >
                            Send me an email
                        </a>
                        <a
                            className="inline-flex items-center justify-center px-8 py-3 border border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide"
                            href="https://www.linkedin.com/in/kevinjordi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
