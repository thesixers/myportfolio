// src/components/Logo.jsx
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
        className="flex items-center justify-center font-black text-2xl tracking-tighter cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {/* The 'N' Part */}
        <span className="text-slate-900">N</span>
        
        {/* The 'A' Part - We flip it or style it to connect */}
        <span className="text-indigo-600 -ml-1">A</span>
        
        {/* The Dot (Adding a dot makes it a statement, not an acronym) */}
        <motion.span 
            className="text-indigo-600 text-3xl leading-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            .
        </motion.span>
    </motion.div>
  )
}