import { useRef } from "react";
import { userProfile } from "../utils";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        // Tailwind: Full width, max-width, center aligned, padding
        <section ref={ref} id="projects" className="w-full max-w-6xl mx-auto py-20 px-4">
            
            {/* Playful Header */}
            <motion.div 
                className="mb-12 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                    Projects <span className="text-indigo-500 text-2xl align-top bg-indigo-100 px-2 py-1 rounded-full">{userProfile.projects.length}</span>
                </h2>
                <p className="text-slate-500">Stuff I've built that actually works.</p>
            </motion.div>
            
            {/* The Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {userProfile.projects.map((project, index) => (
                    <ProjectCard key={project.name || index} project={project} />
                ))}
            </motion.div>
        </section>
    );
}