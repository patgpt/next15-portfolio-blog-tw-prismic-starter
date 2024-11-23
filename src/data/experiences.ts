import { WorkExperience } from '@/components/timeline/Timeline';

export const workExperiences: WorkExperience[] = [
    {
        id: 'withu-2023',
        title: "Senior Web Developer",
        company: "WithU Training",
        slug: "senior-web-developer-withu-training",
        duration: "November 2023 - October 2024",
        description: [
            "Developed online coaching applications using Vue, React, TypeScript, and Next.js",
            "Led a globally distributed team and optimized build times by transitioning from Webpack to Vite",
            "Reduced deployment errors and enhanced efficiency by streamlining CI/CD processes",
            "Worked with cross-functional remote teams to integrate scalable backend services"
        ],
        technologies: ["Vue", "React", "TypeScript", "Next.js", "AWS Amplify", "GraphQL", "Contentful", "Vite"],
        logo: "/withu-logo.png", 
    },
    {
        id: 'globacore-2021',
        title: "Senior Software Engineer",
        company: "Globacore Interactive Technologies",
        slug: "senior-software-engineer-globacore",
        duration: "November 2021 - December 2022",
        description: [
            "Developed interactive web exhibits for major clients such as Google, Rogers, Intel, Amazon, and CrowdStrike",
            "Managed and mentored a team of junior developers",
            "Created visually appealing and highly functional user experiences",
            "Worked closely with clients and internal teams to ensure high-quality delivery"
        ],
        technologies: ["React", "Testing Library", "Jest", "GitHub Actions"],
        logo: "/globacore-logo.jpeg",
    },
    {
        id: 'canadiantire-2019',
        title: "User Experience Developer",
        company: "Canadian Tire Corporation",
        slug: "ux-developer-canadian-tire",
        duration: "November 2019 - December 2020",
        description: [
            "Supported UX testing and experimentation for multiple e-commerce websites",
            "Enhanced UX testing opportunities from Adobe XD wireframes",
            "Improved conversion rates and reduced cart abandonment",
            "Collaborated with cross-functional teams across multiple locations"
        ],
        technologies: ["Optimizely", "Adobe Target", "GTM", "Google Analytics"],
        logo: "/canadian-tire-logo.png",
    },
    {
        id: 'butterfly-2011',
        title: "Founder & Lead Developer",
        company: "Butterfly Design",
        slug: "founder-butterfly-design",
        duration: "January 2011 - 2018",
        description: [
            "Operated a website design and development studio for SMBs",
            "Managed development, SEO, and social marketing teams",
            "Delivered high-performance cross-platform applications",
            "Partnered with clients across Canada and the US"
        ],
        technologies: ["WordPress", "React", "React Native", "Flutter", "GraphQL", "Firebase", "SQL"],
        logo: "/butterfly.jpeg",
    },
    {
        id: 'bestbuy-2005',
        title: "Information Technology Specialist",
        company: "Best Buy",
        slug: "it-specialist-best-buy",
        duration: "January 2005 - January 2007",
        description: [
            "QA and triage for the Best Buy website",
            "Ensured high-quality user experience through comprehensive testing",
            "Identified and resolved critical issues",
            "Worked with development teams to address issues"
        ],
        technologies: ["QA", "Web Testing", "Manual Testing"],
        logo: "/best-buy-logo.png",
    },
    {
        id: 'cda-2001',
        title: "Web Developer",
        company: "Canadian Diabetes Association",
        slug: "web-developer-cda",
        duration: "January 2001 - January 2002",
        description: [
            "Developed and maintained the organization's website",
            "Improved user engagement and site functionality",
            "Regular updates and feature enhancements"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        logo: "/cda-logo.webp",
    }
];