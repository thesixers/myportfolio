// src/utils.js

export const userProfile = {
  name: "Nnamdi Amaga",
  bio: "I’m a fearlessly curious Full Stack Developer who turns wild 'what if?' ideas into scalable applications. I don't just write code; I architect systems, debug the impossible, and bridge the gap between Web, Mobile, and AI.",
  socials: [
    { name: "github.png", link: "https://github.com/thesixers" },
    // { name: "linkedin.svg", link: "https://linkedin.com/in/yourusername" },
    { name: "twitter.svg", link: "https://x.com/Ge_Ne_Six" },
  ],
  cv: "/cv.docx", // Update this path

  // Updated Projects List
  projects: [
    {
      name: "Nexa",
      type: "mobile", // <--- TELLS THE CARD THIS IS AN APP
      preview: "/nexa.png",
      description:
        "A secure, cross-platform communication powerhouse. Features real-time messaging, voice/video calls, and client-side encryption. Designed to rival industry standards.",
      technologies: ["React Native", "Node.js", "WebSockets", "Encryption"],
      repo: "https://github.com/thesixers/nexa_ui",
      link: "https://nexa-live-link.com/download", // This becomes the Download link
    },
    {
      name: "HKAI - Course Builder",
      type: "web", // <--- TELLS THE CARD THIS IS A WEBSITE
      preview: "https://hkai-web.onrender.com/assets/logo-CLnazNvh.png",
      description:
        "An intelligent learning platform that uses AI to generate course structures and content automatically. Bridges the gap between raw data and structured education.",
      technologies: ["LLM Integration", "React", "Fastify", "PostgreSQL"],
      repo: "https://github.com/harperkollinsinc-bit/HKAI_WEB",
      link: "https://hkai-web.onrender.com/",
    },
    {
      name: "The Webtoon Project",
      type: "web",
      preview: "https://thewebtoonproject.com/twp.png",
      description:
        "A digital publishing platform optimized for comics. Focuses on deep SEO integration, metadata management, and a seamless UX for content creators.",
      technologies: ["React", "SEO", "Node.js", "UX Design"],
      repo: "https://github.com/thesixers/twp-vite",
      link: "https://thewebtoonproject.com/",
    },
    {
      "name": "Vibes",
      "type": "desktop",
      "preview": "https://raw.githubusercontent.com/thesixers/vibes/refs/heads/main/assets/icon.png",
      "description": "A cross-platform desktop music player that organizes your local library, fetches clean metadata and album art via Spotify, and provides a modern, user-friendly interface.",
      "technologies": ["Electron", "JavaScript", "Node.js", "Tailwind CSS"],
      "repo": "https://github.com/thesixers/vibes",
      "link": "https://github.com/thesixers/vibes/releases/latest"
    }    
  ],

  // Updated Skills based on your "Arsenal"
  skill: [
    {
      name: "React / Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Linux (Fedora)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Fastify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ],
};
