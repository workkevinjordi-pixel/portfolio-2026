import { RevealWrapper } from "../ui/RevealWrapper";

const processSteps = [
    {
        number: "01",
        title: "Understanding before executing",
        description: "Deep diving into the problem space to ensure structural decisions are rooted in actual user needs, not assumptions."
    },
    {
        number: "02",
        title: "Structure that scales",
        description: "Building design systems and component libraries that grow with the product, reducing debt and increasing velocity."
    },
    {
        number: "03",
        title: "Decisions based on behavior",
        description: "Utilizing data and behavioral insights to refine interactions and validate the product direction iteratively."
    },
    {
        number: "04",
        title: "Collaboration without friction",
        description: "Creating shared languages between design and engineering to ensure the final build matches the intended experience."
    }
];

export function ProcessSection() {
    return (
        <section className="py-24 md:py-40 border-t border-border relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
                <div className="col-span-12 md:col-span-5">
                    <RevealWrapper>
                        <span className="text-label text-muted mb-8 block">03 — Ways of Working</span>
                        <h3 className="font-serif text-4xl md:text-5xl lg:text-[54px] leading-[1.1] sticky top-32 tracking-tight">
                            Guided by Clarity,<br />
                            Shaped by Insight,<br />
                            Built for Scale.
                        </h3>
                    </RevealWrapper>
                </div>

                <div className="col-span-12 md:col-span-5 md:col-start-8 space-y-12">
                    {processSteps.map((step, index) => (
                        <RevealWrapper key={step.number} delay={0.1 + (index * 0.1)}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-border pl-6 md:pl-10 py-2">
                                <span className="font-serif text-2xl text-muted opacity-50">{step.number}</span>
                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-white">{step.title}</h4>
                                    <p className="text-muted font-light leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
