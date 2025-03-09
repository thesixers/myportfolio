import { useRef } from "react";
import { userProfile } from "../utils"
import { motion, useInView } from "framer-motion";


export default function Skill(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    return(
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            id="skill"
        >
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
             <div>
            <h2>Eperienced in</h2>
            <div className="skills">
               <div className="icons">
                    {
                        userProfile.skill.map((s, i) => {
                            let {name, icon} = s;
                            return(
                                <a href="" key={i}>
                                    <div className="skill-img-container">
                                    <img src={icon} alt="" />
                                    <div className="skill-name">{name.toUpperCase()}</div>
                                </div>
                                </a>
                            )
                        })
                    }
                    
               </div>
            </div>
        </div>
        </motion.div>
        </motion.div>
    )
}