import { useRef } from "react";
import { userProfile } from "../utils";
import { motion, useInView } from "framer-motion";

export default function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section
      id="skill"
      ref={ref}
      className="w-full max-w-5xl mx-auto py-24 px-4 flex flex-col items-center justify-center"
    >
      <motion.div
        className="text-center mb-16 space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white transition-colors">
          My Arsenal <span className="inline-block animate-bounce">⚡</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          The tools I use to create magic.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {userProfile.skill.map((s, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -10, rotate: Math.random() * 10 - 5, scale: 1.1 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            {/* Icon Container - Glassy Dark Mode */}
            <div
              className="
                            w-20 h-20 md:w-24 md:h-24 
                            bg-white dark:bg-slate-800/80 
                            rounded-3xl shadow-lg 
                            border border-slate-100 dark:border-white/5 
                            flex items-center justify-center p-4 
                            transition-all duration-300 
                            group-hover:shadow-indigo-200 dark:group-hover:shadow-indigo-900/50 
                            group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30
                        "
            >
              <img
                src={s.icon}
                alt={s.name}
                className="w-full h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
