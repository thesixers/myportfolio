import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    // Destructure properties from your project object
    // Adjust these keys to match your actual 'userProfile' data structure
    const { name, preview, description, technologies, repo, link } = project;

    // Animation variant for the individual card
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 100 } 
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            // 3D Hover Effect: Lifts up, rotates slightly, and casts a colored shadow
            whileHover={{ 
                y: -10, 
                rotate: 1, // Subtle rotation for playfulness
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(79, 70, 229, 0.2)" // Soft Indigo glow
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full shadow-sm"
        >
            {/* 1. Project Image Area */}
            <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                {preview ? (
                    <img 
                        src={preview} 
                        alt={name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    // Fallback pattern if no image
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                )}
                
                {/* Overlay Links (Appears on Hover) */}
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="p-3 bg-white text-indigo-600 rounded-full hover:scale-110 transition-transform shadow-lg" title="Live Demo">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        </a>
                    )}
                    {repo && (
                        <a href={repo} target="_blank" rel="noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg" title="View Code">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                    )}
                </div>
            </div>

            {/* 2. Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {description}
                </p>

                {/* 3. Tech Stack Pills */}
                {technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {technologies.map((tech, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-indigo-500 bg-indigo-50 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}