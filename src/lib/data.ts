export type Project = {
    slug: string;
    title: string;
    heroTitle?: string;
    description: string;
    descriptions?: string[];
    shortDescription?: string;
    tags?: string[];
    image?: string;
    heroImage?: string;
    year?: string;
    role?: string;
    timeline?: string;
    impact?: string;
    client?: string;
    location?: string;
    platform?: string;
    product?: string;
    techStack?: string[];
};

export const projects: Project[] = [
    {
        slug: 'sparta',
        title: 'Sparta',
        heroTitle: 'Streamline Cybersecurity\nB2B Solution',
        description: 'Cybersecurity platform for structured vulnerability reporting and bounty management.',
        shortDescription: 'Cybersecurity platform for structured vulnerability reporting.',
        client: 'Sparta by Cybertise',
        location: 'Germany',
        role: 'Product Designer',
        product: 'Web App',
        techStack: ['tailwind', 'nextjs', 'laravel', 'figma'],
        timeline: '8 Weeks',
        impact: 'System Architecture',
        tags: ['Cybersecurity', 'Web App'],
        image: '/sparta-hero.png',
        heroImage: '/sparta-dashboard.png',
        descriptions: [
            "Sparta by Cybertise is a B2B platform built to operate Vulnerability Reward Programs, connecting companies and security researchers through structured, auditable workflows. It supports complex security operations that demand precision, clarity, and trust across multiple roles — from enterprise security teams and compliance stakeholders to independent researchers. Rather than functioning as a simple marketplace, Sparta acts as operational infrastructure, ensuring vulnerability submissions, evaluations, rewards, and communication flows are transparent, accountable, and legally sound.",
            "Our role as Product Design partner was to build the platform from scratch — not just visually, but strategically. We translated Cybertise's deep domain expertise into a scalable product architecture, defining the information hierarchy, multi-role workflows, audit systems, and design foundations that make complexity feel controlled. Every interaction was designed around risk reduction, clarity of decision-making, and structured processes, ensuring that trust is not just implied, but embedded into the product experience itself."
        ]
    },
    {
        slug: 'quadra-energy',
        title: 'Quadra Energy',
        heroTitle: "The German's\nRenewable Energy Traders",
        description: 'TotalEnergies-backed platform for renewable asset management and energy trading.',
        descriptions: [
            "Quadra Energy is a renewable energy trading company operating at the intersection of decentralized generation, market optimization, and virtual power plant infrastructure. The company aggregates wind, solar, and battery assets and connects them to wholesale energy markets through advanced forecasting and automated trading systems. In a sector defined by regulation, data accuracy, and financial performance, clarity and credibility are critical not only in operations, but also in how the company communicates its expertise and market position.",
            "We are leading the revamp of their company website, redefining how the brand presents itself across digital touchpoints. The project focuses on translating Quadra Energy's technical depth into a clear, authoritative, and structured web experience. Beyond the website, we are establishing consistent brand usage across presentation decks and email communications, refining visual language, typography, color systems, and data storytelling principles to ensure a cohesive and confident brand presence."
        ],
        shortDescription: 'TotalEnergies-backed platform for renewable asset management.',
        client: 'Quadra Energy',
        location: 'Germany',
        role: 'Design Lead',
        product: 'Landing Page',
        techStack: ['wordpress', 'figma'],
        tags: ['Energy', 'Landing Page'],
        image: '/quadra-hero.png', // Temporary placeholder for the card
        heroImage: '/quadra-hero.png'
    },
    {
        slug: 'omnia',
        title: 'Omnia',
        heroTitle: 'Intelligence for\nModern Tattoo Studios',
        description: 'Comprehensive management platform for modern tattoo studios.',
        descriptions: [
            "Omnia is an all-in-one management platform designed for modern tattoo studios. It centralizes everything from booking, deposit collection, digital consent forms, to artist schedules and revenue tracking. In an industry that often relies on fragmented tools (DMs, multiple calendars, clunky POS systems), Omnia provides a cohesive system that elevates the experience for both artists and clients.",
            "Our focus was on translating complex studio workflows into a clean, intuitive iOS application. The challenge was to create a system robust enough to handle the unique financial split structures and unpredictable schedules of tattoo artists, while maintaining a smooth, un-intimidating interface that doesn't distract from the creative work."
        ],
        shortDescription: 'Comprehensive management platform for modern tattoo studios.',
        client: 'Omnia',
        location: 'Germany',
        role: 'Design Lead',
        product: 'Mobile App',
        techStack: ['flutter', 'go', 'figma'],
        year: '2024',
        platform: 'iOS Application',
        tags: ['SaaS', 'iOS', 'Android'],
        image: '/omnia-5.jpg',
        heroImage: '/omnia-1.png'
    },
    {
        slug: 'simplyhop',
        title: 'SimplyHop',
        heroTitle: 'Drive together.\nMove Smarter.',
        description: 'Corporate carpooling and mobility solutions platform.',
        descriptions: [
            "SimplyHop is a mobility solution designed to make corporate commuting efficient, sustainable, and shared. In a landscape where single-occupancy vehicles dominate the daily drive to work, SimplyHop provides an alternative that connects colleagues traveling similar routes. The challenge isn't just logistical — it's behavioral. To convince professionals to share their ride, the experience must be frictionless, reliable, and trustworthy.",
            "Our design approach focused on creating an interface that feels less like a complex transit tool and more like an effortless extension of the workday. We leaned into a clean, typography-led aesthetic with spacious layouts and intuitive map interactions, ensuring that everything from matching with a driver to navigating a route feels secure and straightforward."
        ],
        shortDescription: 'Corporate carpooling and mobility solutions platform.',
        client: 'SimplyHop',
        location: 'Germany',
        role: 'Product Designer',
        product: 'Web App, PWA',
        techStack: ['nextjs', 'tailwind', 'laravel', 'figma'],
        tags: ['Logistics', 'Mobility'],
        image: '/simplyhop-cover.png',
        heroImage: '/simplyhop-1.png'
    },
    {
        slug: 'oscar-frank',
        title: 'Oscar & Frank',
        heroTitle: 'Redefining Premium Eyewear\nThrough Digital Experience',
        description: 'End-to-end Shopify redesign for a premium Australian eyewear brand, elevating the digital storefront to match the quality of the product.',
        descriptions: [
            "Oscar & Frank Eyewear is an independent eyewear brand originating from Sydney, Australia. The company positions itself in the premium segment, producing handcrafted sunglasses and optical frames designed in-house and manufactured using high-quality materials sourced from Europe. Each frame goes through an extensive production process involving more than 50 manufacturing steps over roughly 90 days, combining Italian acetate, French lens technology, and German components.",
            "The project focused on building a refined Shopify shopping experience that allows the product to take center stage while ensuring the purchasing journey remains simple, fast, and intuitive. The goal was to create a digital environment where brand perception, product storytelling, and commerce work seamlessly together."
        ],
        shortDescription: 'Premium eyewear e-commerce redesign on Shopify.',
        client: 'Oscar & Frank',
        location: 'Australia',
        role: 'Product Designer',
        product: 'E-Commerce',
        techStack: ['shopify', 'figma'],
        year: '2024',
        tags: ['E-Commerce', 'Shopify'],
        image: '/oscar-cover.png',
        heroImage: '/oscar-hero.png'
    }
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
