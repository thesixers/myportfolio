import { userProfile } from "../utils";
import me from "../assets/na.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const waveVariants = {
  hover: { rotate: [0, 14, -8, 14, -4, 10, 0, 0] },
};

export default function Intro() {
  return (
    <div className="w-full max-w-6xl mx-auto" id="me">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div
            variants={itemVariants}
            className="text-xl font-medium text-slate-500 dark:text-slate-400 flex items-center justify-center md:justify-start gap-2"
          >
            <span>Hello World</span>
            <motion.span
              className="inline-block cursor-default"
              variants={waveVariants}
              whileHover="hover"
              animate="hover"
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </motion.div>

          {/* NAME + NICKNAME */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Nnamdi
              </span>
            </h1>

            {/* The GeNeSix Badge - Cyberpunk Style */}
            <div className="inline-block bg-slate-900 dark:bg-black/50 text-green-400 font-mono px-4 py-2 rounded-xl text-lg md:text-xl shadow-lg border border-slate-700 dark:border-green-500/30 dark:shadow-green-500/20 backdrop-blur-md">
              &lt;GeNeSix /&gt;
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {userProfile.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 justify-center md:justify-start items-center pt-4"
          >
            {userProfile.socials.map((img, i) => {
              let { name, link } = img;
              return (
                <motion.a
                  href={link}
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all"
                >
                  <img
                    src={`/${name}`}
                    alt={name}
                    className="w-6 h-6 object-contain opacity-70 hover:opacity-100 dark:opacity-90 dark:invert transition-opacity"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* DOWNLOAD CV BUTTON (Updated Playful Version) */}
          <motion.div variants={itemVariants} className="pt-8">
            <motion.a
              href={userProfile.cv}
              download
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white transition-colors duration-200 bg-indigo-600 dark:bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 dark:shadow-indigo-500/50"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
            >
              <span>Download CV</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                variants={{
                  rest: { y: 0 },
                  hover: { y: 3 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Floating Image */}
        <motion.div className="relative group" variants={itemVariants}>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl transform transition-transform duration-500 hover:rotate-3"
              src={me}
              alt="GeNeSix"
            />

            <motion.div
              className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-800 text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              NA Online
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
