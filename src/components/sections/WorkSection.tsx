import { RevealWrapper } from "../ui/RevealWrapper";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export function WorkSection() {
    return (
        <section className="py-24 md:py-40 border-t border-border relative z-10" id="work">
            <div className="flex flex-col gap-8 mb-20">
                <RevealWrapper>
                    <span className="text-label text-muted">02 — Case Study</span>
                </RevealWrapper>
                <RevealWrapper delay={0.1}>
                    <h2 className="font-serif text-4xl md:text-5xl text-balance max-w-3xl">Work shaped by user insight and thoughtful design.</h2>
                </RevealWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <Link
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        className="block h-full cursor-pointer group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-white/10 transition-colors duration-500 relative z-10"
                    >
                        <RevealWrapper delay={0.2 + (index * 0.1)} className="h-full flex flex-col">
                            <div className="p-4 flex flex-col flex-grow">
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex gap-2 mb-10">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wide text-muted">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="border-l border-white/20 pl-5 mt-auto">
                                    <h3 className="font-serif text-3xl mb-3 text-white group-hover:text-teal transition-colors duration-300">{project.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed max-w-sm">{project.shortDescription || project.description}</p>
                                </div>
                            </div>

                            <div className="aspect-[4/3] w-[calc(100%-16px)] ml-4 bg-[#111] overflow-hidden relative mt-6 rounded-tl-2xl border-t border-l border-white/5">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-left-top scale-[1.15] origin-top-left opacity-90 group-hover:opacity-100 group-hover:scale-[1.25] transition-all duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-border text-6xl font-serif opacity-20 group-hover:scale-105 transition-transform duration-700">
                                        {project.title.split(' ')[0]}
                                    </div>
                                )}
                            </div>
                        </RevealWrapper>
                    </Link>
                ))}
            </div>
        </section>
    );
}
