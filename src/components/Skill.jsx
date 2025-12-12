import { useRef } from "react";
import { userProfile } from "../utils";
import { motion, useInView } from "framer-motion";

export default function Skill() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // 1. Staggered Entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Fast stagger for a "ripple" effect
            },
        },
    };

    // 2. Pop-up Animation for each item
    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.5 },
        visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <section 
            id="skill" 
            ref={ref} 
            className="w-full max-w-5xl mx-auto py-20 px-4 flex flex-col items-center justify-center min-h-[60vh]"
        >
            {/* Title Section */}
            <motion.div 
                className="text-center mb-16 space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    My Arsenal <span className="inline-block animate-bounce">⚡</span>
                </h2>
                <p className="text-slate-500 text-lg">The tools I use to create magic.</p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
                className="flex flex-wrap justify-center gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {userProfile.skill.map((s, i) => {
                    let { name, icon } = s;
                    return (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            // 3. Hover Interaction: Tilt and Lift
                            whileHover={{ 
                                y: -10, 
                                rotate: Math.random() * 10 - 5, // Random tilt between -5 and 5 degrees
                                scale: 1.1 
                            }}
                            className="flex flex-col items-center gap-3 cursor-pointer group"
                        >
                            {/* Icon Container - Glassmorphism style */}
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-indigo-200 group-hover:border-indigo-200">
                                <img 
                                    src={icon} 
                                    alt={name} 
                                    className="w-full h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300" 
                                />
                            </div>
                            
                            {/* Skill Name Label */}
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-500 transition-colors">
                                {name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}