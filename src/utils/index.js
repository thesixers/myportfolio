// src/utils.js

export const userProfile = {
    name: "Nnamdi Amaga",
    bio: "I’m a fearlessly curious Full Stack Developer who turns wild 'what if?' ideas into scalable applications. I don't just write code; I architect systems, debug the impossible, and bridge the gap between Web, Mobile, and AI.",
    socials: [
        { name: "github.png", link: "https://github.com/thesixers" },
        // { name: "linkedin.svg", link: "https://linkedin.com/in/yourusername" },
        { name: "twitter.svg", link: "https://x.com/Ge_Ne_Six" }
    ],
    cv: "/path-to-your-cv.pdf", // Update this path
    
    // Updated Projects List
    projects: [
        {
            name: "Nexa",
            preview: "/images/nexa-preview.jpg", // Add a screenshot to your assets
            description: "A secure, cross-platform communication powerhouse. Features real-time messaging, voice/video calls, and client-side encryption. It’s my flagship project designed to rival industry standards.",
            technologies: ["Node.js", "WebSockets", "MongoDB", "Encryption", "React Native"],
            repo: "https://github.com/thesixers/nexa_ui",
            link: "https://nexa-live-link.com"
        },
        {
            name: "HKAI - AI Course Builder",
            preview: "https://hkai-web.onrender.com/assets/logo-CLnazNvh.png", 
            description: "An intelligent learning platform that uses AI to generate course structures and content automatically. Bridges the gap between raw data and structured education.",
            technologies: ["LLM Integration", "React", "Fastify", "PostgreSQL"],
            repo: "https://github.com/harperkollinsinc-bit/HKAI_WEB",
            link: "https://hkai-web.onrender.com/"
        },
        {
            name: "The Webtoon Project",
            preview: "https://thewebtoonproject.com/twp.png",
            description: "A digital publishing platform optimized for comics. Focuses on deep SEO integration, metadata management, and a seamless UX for content creators.",
            technologies: ["React", "SEO", "Node.js", "UX Design"],
            repo: "https://github.com/thesixers/twp-vite",
            link: "https://thewebtoonproject.com/"
        }
    ],

    // Updated Skills based on your "Arsenal"
    skill: [
        { name: "React / Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Linux (Fedora)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Fastify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-plain.svg" }, // Assuming icon exists or use fallback
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
};