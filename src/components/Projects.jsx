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
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full max-w-6xl mx-auto py-24 px-4"
    >
      <motion.div
        className="mb-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3 transition-colors">
          My Projects
          <span className="ml-3 text-2xl align-top bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30">
            {userProfile.projects.length}
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          Stuff I've built that actually works.
        </p>
      </motion.div>

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
