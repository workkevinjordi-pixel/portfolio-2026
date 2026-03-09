import { RevealWrapper } from "../ui/RevealWrapper";

export function AboutSection() {
    return (
        <section className="py-24 md:py-40 border-t border-border relative z-10" id="about">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
                <div className="col-span-12 md:col-span-3">
                    <RevealWrapper>
                        <span className="text-label text-muted sticky top-32">01 — About</span>
                    </RevealWrapper>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                    <RevealWrapper delay={0.1}>
                        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-balance">
                            Clarity, structure, and scalable design.
                        </h2>
                    </RevealWrapper>
                    <div className="space-y-8 text-muted text-lg leading-relaxed font-light">
                        <RevealWrapper delay={0.2}>
                            <p>
                                Focused on creating modern digital products across startups, agencies, and emerging Web3 platforms.
                            </p>
                        </RevealWrapper>
                        <RevealWrapper delay={0.3}>
                            <p>
                                The work emphasizes clarity, structure, and scalable product systems that support multi-role and multi-platform environments. Efforts center on reducing complexity, improving stakeholder alignment, and introducing systems that help teams operate with precision.
                            </p>
                        </RevealWrapper>
                        <RevealWrapper delay={0.4}>
                            <p>
                                Projects span Web3, mobility, energy, fintech, and AI — collaborating with distributed teams across Europe and Asia.
                            </p>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
