// src/components/Logo.jsx
import { motion } from 'framer-motion';

export default function Logo({ isActive = false }) {
  return (
    <motion.div
    className="flex items-center justify-center font-black text-xl tracking-tighter cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <span
      className={`transition-colors duration-300 ${
        isActive ? "text-white" : "text-slate-900 dark:text-white"
      }`}
    >
      N
    </span>
    <span
      className={`-ml-[2px] transition-colors duration-300 ${
        isActive ? "text-indigo-100" : "text-indigo-600 dark:text-indigo-400"
      }`}
    >
      A
    </span>
    <motion.span
      className={`text-2xl leading-none ml-[1px] transition-colors duration-300 ${
        isActive ? "text-indigo-200" : "text-indigo-600 dark:text-indigo-400"
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      .
    </motion.span>
  </motion.div>
  )
}