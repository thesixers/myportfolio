import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sticker({ src, alt, top, left, right, bottom, speed = 0.5, rotate = 0, scale = 1, className }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax: Moves image based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

    return (
        <div 
            ref={ref}
            className={`absolute z-0 pointer-events-none ${className}`}
            style={{ top, left, right, bottom }}
        >
            <motion.img 
                src={src} 
                alt={alt}
                style={{ 
                    y, 
                    rotate, 
                    scale,
                    // THE STICKER EFFECT:
                    // 1. First two shadows create the white "paper" outline
                    // 2. Third shadow creates the depth/shadow behind the sticker
                    filter: "drop-shadow(0px 0px 2px white) drop-shadow(0px 0px 2px white) drop-shadow(0px 10px 15px rgba(0,0,0,0.3))"
                }}
                className="w-32 md:w-48 lg:w-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: scale }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            />
        </div>
    );
}