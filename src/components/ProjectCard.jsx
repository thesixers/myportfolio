import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { name, type, preview, description, technologies, repo, link } =
    project;
  const isMobile = type === "mobile";

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0px 20px 40px rgba(79, 70, 229, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
                group relative flex flex-col h-full overflow-hidden rounded-[2rem]
                bg-white dark:bg-slate-900/80 
                border border-slate-100 dark:border-white/10
                shadow-sm dark:shadow-none
                transition-colors duration-300
            "
    >
      {/* IMAGE AREA */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-white/5">
        <div className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1 border border-transparent dark:border-white/10">
          {isMobile ? <span>📱 App</span> : <span>🌐 Web</span>}
        </div>

        {preview ? (
          <img
            src={preview}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-800">
            <span className="text-4xl">🚀</span>
          </div>
        )}

        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-indigo-900/60 dark:bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 rounded-full hover:scale-105 transition-transform shadow-lg font-bold text-sm"
            >
              <span>{isMobile ? "Download" : "Visit"}</span>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>

        {technologies && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-indigo-50 text-indigo-500 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
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
