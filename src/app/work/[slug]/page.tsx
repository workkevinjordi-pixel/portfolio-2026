import { getProjectBySlug, projects } from "@/lib/data";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import OmniaHorizontalScroll from "@/components/OmniaHorizontalScroll";
import OmniaBentoOverlay from "@/components/OmniaBentoOverlay";
import SimplyHopScrollAnimation from "@/components/SimplyHopScrollAnimation";
import SimplyHopParallaxImage from "@/components/SimplyHopParallaxImage";
import OscarFrankParallaxVideo from "@/components/OscarFrankParallaxVideo";
import OscarShowcaseSection from "@/components/OscarShowcaseSection";
import SimplyHopCardsAnimation from "@/components/SimplyHopCardsAnimation";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return projects.map((project: any) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: Props) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    // Determine next project for footer
    const currentIndex = projects.findIndex((p: any) => p.slug === project.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#bef264] selection:text-black font-sans overflow-clip">

            <div className="max-w-[1024px] mx-auto px-6 relative z-10 pt-40 pb-20 flex flex-col gap-24">
                {/* Hero Section */}
                <header className="flex flex-col items-center text-center gap-12 animate-fade-in-up relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-[40%] w-[150vw] max-w-[2500px] h-[220px] bg-gradient-to-r from-[#bef264]/25 via-transparent to-blue-500/25 blur-[120px] -skew-y-2 pointer-events-none z-0"></div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* Industry Pills */}
                        <div className="flex items-center gap-2">
                            {project.tags?.length ? (
                                project.tags.map((tag) => (
                                    <div key={tag} className="flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                        <span className="text-xs font-semibold tracking-[0.2em] font-serif uppercase text-slate-300">
                                            {tag}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <span className="text-xs font-semibold tracking-[0.2em] font-serif uppercase text-slate-300">
                                        Case Study
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Company Logo */}
                        {project.slug === 'sparta' && (
                            <div className="flex items-center justify-center h-16 mt-2 mb-6">
                                <Image
                                    src="/logo-sparta.svg"
                                    alt={`${project.title} Logo`}
                                    width={240}
                                    height={64}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        )}
                        {project.slug === 'quadra-energy' && (
                            <div className="flex items-center justify-center h-16 mt-2 mb-6">
                                <Image
                                    src="/logo-quadra.png"
                                    alt={`${project.title} Logo`}
                                    width={240}
                                    height={64}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        )}

                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-white tracking-tight max-w-4xl">
                            {project.heroTitle || project.title}
                        </h1>
                    </div>
                </header>

                {/* Metadata Grid */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16">
                    <div className="md:col-span-4 flex flex-col gap-8">
                        {project.client && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Client</p>
                                <p className="text-lg font-medium text-white">{project.client}</p>
                            </div>
                        )}
                        {project.location && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Origin</p>
                                <p className="text-lg font-medium text-white">{project.location}</p>
                            </div>
                        )}
                        {project.role && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">
                                    {project.slug === 'sparta' ? 'What I did' : 'Role'}
                                </p>
                                <p className="text-lg font-medium text-white">{project.role}</p>
                            </div>
                        )}
                        {project.product && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Product</p>
                                <p className="text-lg font-medium text-white">{project.product}</p>
                            </div>
                        )}
                        {project.techStack && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Tech Stack</p>
                                <div className="flex items-center gap-4 mt-1">
                                    {project.techStack.includes('tailwind') && (
                                        <Image src="/tailwind.svg" alt="Tailwind CSS" width={22} height={22} className="opacity-90" />
                                    )}
                                    {project.techStack.includes('nextjs') && (
                                        <Image src="/nextjs.svg" alt="Next.js" width={40} height={22} className="opacity-90" />
                                    )}
                                    {project.techStack.includes('laravel') && (
                                        <Image src="/laravel.svg" alt="Laravel" width={22} height={22} className="opacity-90" />
                                    )}
                                    {project.techStack.includes('flutter') && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128"><g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" /></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" /><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" /><linearGradient id="flutter-a" gradientUnits="userSpaceOnUse" x1="59.3" y1="116.4" x2="86.8" y2="99.4"><stop offset="0" stop-color="#1b4e94" /><stop offset=".63" stop-color="#1a5497" /><stop offset="1" stop-color="#195a9b" /></linearGradient><path fill="url(#flutter-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" /></svg>
                                    )}
                                    {project.techStack.includes('go') && (
                                        <Image src="/go.svg" alt="Go" width={30} height={30} />
                                    )}
                                    {project.techStack.includes('wordpress') && (
                                        <Image src="/wordpress.svg" alt="WordPress" width={22} height={22} className="opacity-90" />
                                    )}
                                    {project.techStack.includes('shopify') && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 292"><path fill="#95BF47" d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.089-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.18.053-3.388 1.046-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.51-24.869 7.703-26.138 8.09-8.116 2.549-8.373 2.805-9.434 10.418C21.18 96.806 0 260.235 0 260.235l177.83 30.712V57.209c-1.414.024-.344.024.008.024-.01 0-.01.073-.01.107h45.946Zm-67.717-15.2c-3.882 1.202-8.306 2.572-13.144 4.07v-2.95c0-8.72-1.205-15.783-3.16-21.345 7.853 1.015 13.108 9.95 16.304 20.225ZM151.4 11.607c2.182 5.548 3.598 13.454 3.598 24.212v1.55c-8.51 2.636-17.805 5.514-27.137 8.405 5.237-20.148 15.06-30.905 23.539-34.167Zm-11.105-5.764c.77 0 1.54.173 2.303.517-11.222 5.279-23.224 18.592-28.275 45.13-7.426 2.3-14.727 4.56-21.495 6.654C98.92 34.558 113.73 5.843 140.296 5.843Z" /><path fill="#5E8E3E" d="M221.237 54.983c-1.055-.089-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-.008 255.905 76.757-16.67S223.932 56.398 221.237 54.983Z" /><path fill="#FFF" d="m135.233 104.52-11.19 33.245s-9.827-5.236-21.83-5.236c-17.644 0-18.533 11.07-18.533 13.864 0 15.225 39.704 21.063 39.704 56.74 0 28.075-17.8 46.143-41.805 46.143-28.822 0-43.545-17.94-43.545-17.94l7.716-25.47s15.155 13.016 27.937 13.016c8.34 0 11.746-6.571 11.746-11.379 0-19.879-32.585-20.768-32.585-53.417 0-27.48 19.724-54.078 59.558-54.078 15.37 0 22.827 4.412 22.827 4.412Z" /></svg>
                                    )}
                                    {project.techStack.includes('figma') && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z" /><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z" /><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z" /><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67z" /><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z" /></svg>
                                    )}
                                </div>
                            </div>
                        )}
                        {project.year && !project.product && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Year</p>
                                <p className="text-lg font-medium text-white">{project.year}</p>
                            </div>
                        )}
                        {project.platform && !project.product && (
                            <div>
                                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-1">Platform</p>
                                <p className="text-lg font-medium text-white">{project.platform}</p>
                            </div>
                        )}
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-6 text-[#9a9a9a] text-xl font-light leading-relaxed">
                        {project.descriptions ? (
                            project.descriptions.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))
                        ) : (
                            <p>{project.description}</p>
                        )}
                    </div>
                </section>
            </div>

            {/* --- OMNIA CUSTOM LAYOUT --- */}
            {project.slug === 'omnia' && (
                <div className="flex flex-col bg-black text-white w-full overflow-hidden">
                    {/* Hero Image */}
                    <div className="w-full">
                        <div className="w-full aspect-[21/9] bg-zinc-900 overflow-hidden relative">
                            <img src="/omnia-1.png" alt="Omnia App Showcase" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Designing for Creative Workflows */}
                    <div className="max-w-[1240px] mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h3 className="text-3xl font-serif leading-tight sticky top-32">Designing for<br />Creative Workflows</h3>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-6 text-[#9a9a9a] text-lg font-light leading-relaxed">
                            <p>Tattoo artists operate differently. They need platforms that capture fast-moving discussions, fluid booking changes, and flexible revenue models. While robust, software often fails here because it forces highly spontaneous workflows into rigid corporate structures.</p>
                            <p>The solution was designing a system that feels light but acts heavy. By abstracting the complex logic—revenue splits, multi-day session deposits, custom forms—into simple, singular actions, we reduced the cognitive load. The UI acts more like a quiet assistant, surfacing the right tools only when needed, maintaining the studio's creative focus.</p>
                        </div>
                    </div>

                    {/* 3-Image Showcase Row (Scroll-tied Animation) */}
                    <div className="w-full relative px-0 md:px-6 w-[100vw] -ml-6 md:ml-0">
                        <OmniaHorizontalScroll />
                    </div>

                    {/* Building a system, not just an interface */}
                    <div className="max-w-[1240px] mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10">
                        <div className="md:col-span-4">
                            <h3 className="text-3xl font-serif leading-tight sticky top-32">Building a system,<br />not just an interface</h3>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-6 text-[#9a9a9a] text-lg font-light leading-relaxed">
                            <p>Every element was designed to reduce friction. Interactions are quick, feedback is immediate, and navigation is flat. The approach was to create intuitive gestures and clearly signaled actions that adapt fluidly across devices. What appears as a simple minimal surface area is backed by a deeply considered logic engine, ensuring reliability without visual noise.</p>
                        </div>
                    </div>

                    {/* Custom Bento Grid Layout matching attachment */}
                    <div className="max-w-[1240px] mx-auto px-6 pb-32 flex flex-col gap-8 md:gap-16">

                        {/* Top Row: Image Left, Text Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] relative">
                                {/* Using omnia-3.png which likely has the blue border baked in based on instructions */}
                                <img src="/omnia-3.png" alt="Omnia App Features" className="w-full h-full object-contain md:object-cover rounded-3xl" />
                            </div>
                            <div className="flex flex-col justify-center px-4 md:px-0 md:pr-12 lg:pr-24">
                                <p className="text-[24px] font-sans leading-[1.4] text-white/90">
                                    Omnia represents a product where operational intelligence supports creative expression, turning fragmented studio processes into a cohesive digital system.
                                </p>
                            </div>
                        </div>

                        {/* Middle Row: Text Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center flex-col-reverse lg:flex-row">
                            <div className="flex flex-col justify-center px-4 md:px-0 md:pl-12 lg:pl-24 order-2 lg:order-1">
                                <p className="text-[24px] font-sans leading-[1.4] text-white/90">
                                    Focused on clarity, calm interfaces, and minimal friction so artists can spend less time managing logistics and more time focusing on their work.
                                </p>
                            </div>
                            <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] relative order-1 lg:order-2">
                                {/* Using omnia-4.png which likely has the orange background baked in */}
                                <img src="/omnia-4.png" alt="Omnia Payment Details" className="w-full h-full object-contain md:object-cover rounded-3xl" />
                            </div>
                        </div>

                        {/* Bottom Row: Full Width Banner Video */}
                        <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden mt-8 md:mt-16 bg-zinc-900 border border-white/5 relative aspect-[21/9] md:aspect-[16/6] flex items-center justify-center">
                            <video
                                src="/omnia-video-1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Animated SVG Overlays */}
                            <OmniaBentoOverlay />
                        </div>
                    </div>

                    {/* The Result Block */}
                    <div className="max-w-[1240px] mx-auto px-6 py-32 border-t border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                            <div className="md:col-span-8 lg:col-span-7 pl-0 lg:pl-[12%]">
                                <h3 className="text-3xl font-serif leading-tight">The Goals</h3>
                                <p className="text-[#9a9a9a] mt-6 text-[21px] font-sans font-light leading-[1.6]">
                                    The goal was to create a tool that feels natural to use, almost invisible in the background, allowing artists to manage clients, bookings, and communication without disrupting their creative process. In this way, the technology quietly supports the studio's operations while letting artists stay focused on what truly matters: their work and their clients.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Asymmetric Grid matching attachment */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch mt-12">
                            {/* Left Column: Image top, Text bottom */}
                            <div className="flex flex-col justify-between gap-12 lg:gap-24">
                                <div className="bg-zinc-900 rounded-[2rem] overflow-hidden w-full aspect-[4/3] lg:aspect-[1.2/1]">
                                    <img src="/omnia-5.jpg" alt="Multiple Phones Mockup" className="w-full h-full object-cover" />
                                </div>
                                <div className="px-4 md:px-12 pb-8 lg:pb-12">
                                    <p className="text-[#9a9a9a] text-[20px] font-sans font-light leading-[1.6]">
                                        Tattoo artists are highly skilled in their craft, but most of them are not particularly tech-savvy, and they should not have to learn complex software just to run their studio. Because of that, the design approach focused on minimizing friction at every interaction.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Full height image */}
                            <div className="bg-zinc-900 rounded-[2rem] overflow-hidden w-full h-full min-h-[500px]">
                                <img src="/omnia-6.png" alt="Artist using Omnia" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {project.slug === 'simplyhop' && (
                <div className="w-full bg-[#050505] text-[#e0e0e0] overflow-clip pb-0 font-sans">
                    {/* 1. Hero Full Width Image */}
                    <ScrollReveal>
                        <div className="w-full mt-12 mb-20 md:mb-32">
                            <div className="w-full bg-zinc-900 flex justify-center border-none relative">
                                <img src="/simplyhop-hero.png" alt="SimplyHop Dashboard" className="w-full h-auto object-contain block" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 2. Simplicity Without Losing Structure */}
                    <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                        <ScrollReveal className="md:col-span-4 lg:col-span-4">
                            <h3 className="text-[28px] md:text-[34px] font-serif leading-tight text-white tracking-tight">Simplicity Without<br />Losing Structure</h3>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="md:col-span-8 lg:col-span-7 flex flex-col gap-6 text-[#9a9a9a] text-[17px] md:text-[19px] font-light leading-[1.6]">
                            <p>Carpooling sounds simple. Making it operationally reliable for companies is not.</p>
                            <p>Users generally come to the platform with one of two goals: finding a ride or offering a ride.</p>
                            <p>The interface reflects these two primary intentions immediately. Navigation is simplified, decision points are limited, and actions are clearly labeled. Users should not need to explore the interface to understand what to do next. The system makes the next step obvious.</p>
                            <p>By structuring the experience around clear entry points and guided flows, the platform removes uncertainty and reduces the chance of user hesitation.</p>
                        </ScrollReveal>
                    </div>

                    {/* 3. Two-Column Image Grid (Hand + Car) */}
                    <div className="max-w-[1240px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Hand holding phone */}
                        <ScrollReveal className="md:col-span-5 h-full">
                            <div className="w-full h-full min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden bg-zinc-900 relative">
                                <img src="/simplyhop-2-1.png" alt="SimplyHop Mobile Interface" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </ScrollReveal>
                        {/* Woman in car + Text */}
                        <ScrollReveal delay={0.15} className="md:col-span-7 flex flex-col gap-6">
                            <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-900 relative">
                                <video
                                    src="/simplyhop-2-2.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="px-4 md:px-8 pt-4">
                                <p className="text-[#9a9a9a] text-[17px] md:text-[19px] font-light leading-[1.6] max-w-xl">
                                    The mobile experience is centered around immediacy. Whether checking a ride status or adjusting a route, the app provides real-time context without requiring deep navigation.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* 4. Three-Column Bento Grid + Paragraph */}
                    <div className="w-full relative py-16 md:py-32 flex flex-col items-center overflow-hidden">
                        <SimplyHopScrollAnimation />
                    </div>

                    {/* 5. Full-Width Parallax Image */}
                    <SimplyHopParallaxImage />

                    {/* 6. Two-Column Image Grid (Rating + Cards) */}
                    <ScrollReveal>
                        <div className="max-w-[1240px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-6" style={{ minHeight: "550px" }}>
                            <div className="flex-shrink-0 flex justify-center bg-white rounded-[2rem] p-8 md:p-10 overflow-hidden">
                                <img src="/simplyhop-4-2.png" alt="Driver Rating Screen" className="w-auto h-full max-h-[550px] object-contain" />
                            </div>
                            <SimplyHopCardsAnimation />
                        </div>
                    </ScrollReveal>

                    {/* 7. Technology That Stays in the Background */}
                    <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start border-t border-white/10 mt-12">
                        <ScrollReveal className="md:col-span-4 lg:col-span-4">
                            <h3 className="text-[28px] md:text-[34px] font-serif leading-tight text-white tracking-tight">Technology That Stays<br />in the background</h3>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="md:col-span-8 lg:col-span-7 flex flex-col gap-6 text-[#9a9a9a] text-[17px] md:text-[19px] font-light leading-[1.6]">
                            <p>Complex routing algorithms and real-time scheduling operate silently behind the scenes. We focused on presenting only what the user needs at any given moment, ensuring that the interface never feels overwhelming.</p>
                            <p>Trust is a massive component when sharing rides with colleagues. From transparent driver ratings to clear communication channels and verified corporate profiles, every feature was designed to build confidence in the system, making the decision to share a ride feel safe, smart, and entirely natural.</p>
                            <p>The result is a mobility platform that doesn't just manage logistics—it fosters connection within the corporate environment, while driving measurable impact toward a greener future.</p>
                        </ScrollReveal>
                    </div>

                    {/* 8. Footer Image */}
                    <div className="w-full h-screen relative overflow-hidden">
                        <img src="/simplyhop-footer.png" alt="SimplyHop Footer" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            )}

            {/* Full Bleed Image over Yellow Band (Optional default layout) */}
            {
                project.heroImage && project.slug === 'quadra-energy' ? (
                    <div className="w-full pt-8 md:pt-16 pl-6 md:pl-12 lg:pl-[170px] bg-[#ebfceb] overflow-hidden">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-tl-[40px] md:rounded-tl-[64px] overflow-hidden shadow-2xl">
                            <Image
                                src={project.heroImage}
                                alt={`${project.title} Hero Image`}
                                fill
                                className="object-cover object-left-top"
                                priority
                            />
                        </div>
                    </div>
                ) : project.heroImage && project.slug !== 'omnia' && project.slug !== 'oscar-frank' && project.slug !== 'simplyhop' && (
                    <div className="w-full pt-20 pb-20 relative px-6 md:px-12 lg:px-[170px] bg-[#f4fce3]">
                        <div className="relative w-full max-w-[1240px] mx-auto group aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-[#1d1d1b]">
                            <div className="absolute top-0 left-0 w-full h-12 bg-[#2d2d2d] border-b border-black/20 flex items-center px-6 z-10 gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#404040]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#404040]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#404040]"></div>
                            </div>
                            <div className="relative w-full h-[calc(100%-48px)] mt-12 bg-[#1d1d1b]">
                                <Image
                                    src={project.heroImage}
                                    alt={`${project.title} Hero Image`}
                                    fill
                                    className="object-contain object-top"
                                />
                            </div>
                        </div>
                    </div>
                )
            }

            {
                project.slug === 'quadra-energy' && (
                    <div className="flex flex-col">
                        {/* Clean, like the energy produced */}
                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 py-32 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-3xl font-serif text-white sticky top-32 leading-[1.2]">Clean, like the<br />energy produced</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-8 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>Our design approach mirrors the product itself. Renewable energy is efficient, structured, and free from unnecessary waste. The interface and visual language follow the same principle. Every layout decision removes friction, every component has a defined role, and every visual element serves clarity rather than decoration. The goal is not to impress with complexity, but to communicate intelligence through precision.</p>
                                    <p>We focused on controlled typography, disciplined spacing, and a restrained color system that reflects technical confidence. Data is presented with hierarchy and balance, allowing information to breathe while maintaining authority. The result is a brand presence that feels modern and reliable, where simplicity is not minimal for trend, but minimal for performance.</p>
                                </div>
                            </div>
                        </div>

                        {/* 6 Grid Section Image Replacement */}
                        <div className="w-full bg-[#ebfceb] py-8 md:py-12 px-6 flex justify-center">
                            <div className="w-full max-w-4xl relative rounded-3xl overflow-hidden shadow-sm">
                                <img
                                    src="/quadra-2.png"
                                    alt="Quadra Energy Asset Management Overview"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Built on consistency */}
                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 py-32 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-3xl font-serif text-white sticky top-32 leading-[1.2]">Built on consistency,<br />yet intuitive</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-8 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>The platform was designed back on shared conventions and a typographic hierarchy that guides the eye exactly where you want to read.</p>
                                    <p>Consistency extends to behavior: our color scheme and grouping ensures the energy lifecycle process is visualized the way operators want to see it. Always clear, precise, and without any arbitrary elements to disturb the eye.</p>
                                    <p>One memory. Single layout. One structure. Available on local hardware groups. Everything guided by the most scalable and highly configurable API network.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Block Image Replacement */}
                        <div className="max-w-[1240px] mx-auto w-full mt-10 mb-32 relative px-6">
                            <img
                                src="/quadra-4.png"
                                alt="Quadra 360 Service Overview"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                        </div>

                        {/* When engaging design... */}
                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 pb-32 pt-16 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-2xl md:text-3xl font-serif text-white sticky top-32 leading-[1.3]">When engaging design<br />meets intuitive<br />experience</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>The result is a platform that is highly functional, yet completely unintimidating. It allows users to manage complex datasets completely seamlessly.</p>
                                    <p>This visually clean and organized approach fundamentally reduces user friction, minimizing errors during the challenge of data-heavy analysis without any distraction of UI artifacts.</p>
                                    <p>The central innovation continues from accessibility completely cross platform, unified and robust. Data access seamlessly adapts across all sizes without losing focus on speed and clarity, leading to minimal user training.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                project.slug === 'sparta' && (
                    <>
                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 py-32 flex flex-col gap-32">
                            {/* Introduction Text Block */}
                            <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 text-base md:text-lg text-[#9a9a9a] font-light leading-relaxed">
                                <p>
                                    The work focused on strengthening the platform's foundation refining reporting flows, improving information clarity, and establishing consistency across researcher, company, and admin experiences.
                                </p>
                                <p>
                                    Design decisions were shaped by the need to translate highly technical security workflows into interfaces that feel clear, predictable, and reliable, without oversimplifying the underlying logic. The outcome is a system that supports scale, reduces friction in critical reporting moments, and maintains clarity across a growing set of use cases and roles.
                                </p>
                            </div>

                            {/* Secondary Dashboard Mockup */}
                            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden group">
                                <img
                                    src="/sparta-detail2.png"
                                    alt="Sparta Submit Report Dashboard"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Left Aligned Text Feature Blocks */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-20">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-serif text-white sticky top-32">Simplify activities</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>We mapped the day-to-day routines of tier 1 and tier 2 security analysts to understand their core interactions and persistent pain points.</p>
                                    <p>By automating repetitive triage tasks and surfacing contextually relevant historical data alongside active threats, we dramatically reduced the time spent investigating false positives. The interface naturally guides the user to the most critical action required.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-serif text-white sticky top-32 leading-[1.1]">Designing for real<br />workflows</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>The system was designed with extreme adaptability in mind. It acknowledges that no two security operations centers operate identically, allowing teams to construct custom dashboard views tailored to their specific threat landscapes.</p>
                                    <p>This localized modularity ensured that both junior analysts monitoring broad trends and senior threat hunters drilling into specific vectors could utilize the same platform efficiently without compromising power for usability.</p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Component over Purple Band */}
                        <div className="w-full bg-[#d0c4fb] py-24 px-6 relative flex justify-center overflow-hidden">
                            <img
                                src="/Sparta-4.png"
                                alt="Sparta Process Timeline"
                                className="w-full max-w-[1024px] h-auto object-contain shadow-2xl rounded-3xl"
                            />
                        </div>

                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 py-32 flex flex-col gap-32">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-serif text-white sticky top-32">Streamline Process</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>Our methodology involved tight feedback loops with domain experts. We presented rough concepts early, validating interactions before committing to high-fidelity designs.</p>
                                    <p>The development phase ran parallel to the design process, with continuous integration. This overlap ensured technical feasibility was verified early, preventing costly re-work in the final stages.</p>
                                </div>
                            </div>

                            {/* Scalable Design System */}
                            <section className="py-16 border-y border-white/5">
                                <div className="flex flex-col md:flex-row gap-12">
                                    <div className="md:w-1/3 flex flex-col justify-center">
                                        <h2 className="font-serif text-4xl text-white mb-6">Scalable Design System</h2>
                                        <p className="text-slate-400 mb-8">
                                            Built on a rigid 4px grid, the Sparta design system utilizes high-contrast color tokens to ensure legibility in low-light SOC environments.
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 rounded-full bg-black border border-white/20"></div>
                                            <div className="h-12 w-12 rounded-full bg-[#BAFF00]"></div>
                                            <div className="h-12 w-12 rounded-full bg-teal-400"></div>
                                            <div className="h-12 w-12 rounded-full bg-[#4BA2E3]"></div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 grid grid-cols-2 gap-4">
                                        <div className="bg-[#111] rounded-xl p-8 flex flex-col justify-between h-64">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-5xl font-serif text-white">Aa</span>
                                                <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">PRIMARY SERIF</span>
                                            </div>
                                            <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                                                <span className="text-3xl font-bold text-white tracking-tight">Inter</span>
                                                <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">SECONDARY SANS</span>
                                            </div>
                                        </div>
                                        <div className="bg-[#111] rounded-xl p-8 flex flex-col gap-4 justify-center items-center h-64">
                                            <button className="w-full bg-[#BAFF00] hover:bg-[#a6e600] text-black font-medium py-3 px-4 rounded-lg transition-colors">
                                                Primary Action
                                            </button>
                                            <button className="w-full bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors">
                                                Secondary Action
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Dual Dashboard Dark/Light Showcase */}
                        <div className="w-full bg-[#0a1120] py-32 px-6 md:px-12 lg:px-[170px] flex justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none"></div>
                            <div className="w-full max-w-[1240px] relative flex justify-center items-center z-10">
                                <img src="/sparta-5.png" alt="Sparta Dual Dashboard Showcase" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        <div className="max-w-[1024px] mx-auto px-6 relative z-10 pt-32 pb-10 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-serif text-white sticky top-32 leading-[1.1]">Light mode?<br />Why not</h3>
                                </div>
                                <div className="md:col-span-8 flex flex-col gap-6 text-lg text-[#9a9a9a] font-light leading-relaxed pt-2">
                                    <p>While dark mode is traditionally favored in security environments to reduce eye strain in low-light SOC settings, we recognized that cybersecurity workflows are expanding into brighter, general-purpose enterprise environments.</p>
                                    <p>To support accessibility and varied lighting conditions, we defined a comprehensive light mode theme. This required careful recalibration of our semantic color palette to guarantee that urgent alerts retained their visual prominence without causing color fatigue against white backgrounds.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            {/* --- OSCAR & FRANK CUSTOM LAYOUT --- */}
            {project.slug === 'oscar-frank' && (
                <div className="flex flex-col bg-[#050505] text-white w-full overflow-hidden">

                    {/* 1. Parallax Video Hero — fullscreen to framed */}
                    <OscarFrankParallaxVideo />

                    {/* 2. Statement Text Block */}
                    <ScrollReveal>
                        <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-20">
                            <div className="max-w-4xl">
                                <p className="text-[17px] md:text-[21px] font-sans font-light leading-[1.6] text-white/80">
                                    Oscar & Frank approached the project with the ambition to elevate its digital storefront into a premium commerce experience that reflects the brand's distinctive identity. As the eyewear catalog continued to grow and international demand increased, the existing online store needed a more refined structure to support product discovery, storytelling, and conversion.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 3. Product Grid Image */}
                    <ScrollReveal>
                        <div className="w-full px-6 md:px-12 lg:px-20 pb-24">
                            <div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden bg-[#f5f5f0]">
                                <img src="/oscar-1.png" alt="Oscar & Frank Sunglasses Collection" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 4. Simplifying the Purchase Journey */}
                    <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10">
                        <ScrollReveal className="md:col-span-4">
                            <h3 className="text-[28px] md:text-[34px] font-serif leading-tight text-white tracking-tight sticky top-32">Simplifying the<br />Purchase Journey</h3>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="md:col-span-8 flex flex-col gap-6 text-[#9a9a9a] text-[17px] md:text-[19px] font-light leading-[1.6]">
                            <p>While visual storytelling plays an important role, the purchasing experience must remain effortless. The product pages present essential information in a clear hierarchy:</p>
                            <ul className="flex flex-col gap-3 pl-5">
                                <li className="list-disc">Frame design and style</li>
                                <li className="list-disc">Material and craftsmanship details</li>
                                <li className="list-disc">Lens specifications</li>
                                <li className="list-disc">Pricing and purchase actions</li>
                            </ul>
                            <p>This structure ensures that customers can move from exploration to purchase without unnecessary steps. The interface intentionally avoids complexity so that the buying process remains quick and straightforward.</p>
                        </ScrollReveal>
                    </div>

                    {/* 5. Bento Grid 1: Model + Glasses */}
                    <ScrollReveal>
                        <div className="max-w-[1240px] mx-auto px-6 pb-24 md:pb-32">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                {/* Left: Tall model image */}
                                <div className="rounded-[2rem] overflow-hidden bg-zinc-900 min-h-[500px] lg:min-h-[700px] relative flex items-center justify-center">
                                    <img src="/oscar-2.png" alt="Model wearing Oscar & Frank sunglasses" className="w-full h-full object-contain" />
                                </div>
                                {/* Right: Glasses image — half height of left */}
                                <div className="flex flex-col gap-6">
                                    <div className="rounded-[2rem] overflow-hidden bg-white relative flex items-center justify-center p-8 lg:h-[350px]">
                                        <img src="/oscar-glasses.png" alt="Oscar & Frank sunglasses" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 6. Supporting a Brand with Uncompromising Standard */}
                    <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10">
                        <ScrollReveal className="md:col-span-4">
                            <h3 className="text-[28px] md:text-[34px] font-serif leading-tight text-white tracking-tight sticky top-32">Supporting a Brand with<br />Uncompromising Standard</h3>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="md:col-span-8 flex flex-col gap-6 text-[#9a9a9a] text-[17px] md:text-[19px] font-light leading-[1.6]">
                            <p>One of the most important aspects of the project was ensuring that the e-commerce experience supports the brand's identity without overwhelming the user. The design language combines strong typography, high-contrast layouts, and immersive product imagery to reinforce Oscar & Frank's bold visual style.</p>
                        </ScrollReveal>
                    </div>

                    {/* 7. Full Width Showcase with Floating Product Cards */}
                    <OscarShowcaseSection />

                    {/* 8. Closing Statement */}
                    <ScrollReveal>
                        <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-32 border-t border-white/10">
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-[18px] md:text-[21px] font-light leading-[1.7] text-[#9a9a9a]">
                                    While much of the digital experience was designed around e-commerce performance, we never lost sight of the brand's identity. Every decision — from the way a product card animates on hover to the whitespace around a hero image — was made to reinforce a sense of quality that matches the product itself.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 9. Footer Image: Full-screen */}
                    <div className="w-full h-screen relative overflow-hidden">
                        <img src="/oscar-footer.png" alt="Oscar & Frank mobile experience" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            )}

            {/* Footer / Next Project */}
            {
                nextProject && (
                    <footer className="mt-32 py-20 border-t border-white/10 flex flex-col items-center justify-center gap-6 group hover:border-teal-500/30 transition-colors duration-500">
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">Next Case Study</p>
                        <Link href={`/work/${nextProject.slug}`} className="flex flex-col items-center gap-4">
                            <h2 className="font-serif text-5xl md:text-6xl text-white group-hover:text-teal-400 transition-colors">{nextProject.title}</h2>
                            <span className="text-slate-400 group-hover:text-white transition-colors border border-white/20 rounded-full px-6 py-2">View Project</span>
                        </Link>
                    </footer>
                )
            }
        </main >
    );
}
