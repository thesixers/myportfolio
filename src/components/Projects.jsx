import { useRef , useState, useEffect} from "react";
import { userProfile } from "../utils"
import { useInView, motion } from "framer-motion";

export default function Projects(){
    const ref = useRef(null);
    const nextRef = useRef(null)
    const isInView = useInView(ref);
    const [index, setIndex] = useState(0)
    let num = userProfile.projects.length -1;

   let next = () => {
        if(index >= num ) return;
        nextRef.current.classList.remove('project-left')
        nextRef.current.classList.add('project-right')
        setIndex(index + 1);
    }

    let prev = () => {
        if(index < 1) return;
        nextRef.current.classList.remove('project-right')
        nextRef.current.classList.add('project-left')
        setIndex(index - 1);
    }
    // const 
  
    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            id="projects"
        >
            <h2 className="title">Projects</h2>
            <div className="projects">
            {
                ((index > 0) && <span className="material-symbols-outlined prev" onClick={prev}>
                arrow_back_ios
                </span>)
            }
                <div className="pct">
                    <div className="project" ref={nextRef}>
                        <img src={userProfile.projects[index].logo} alt="" />
                        <div className="details">
                            <div className="p-name">{}</div>
                            <div className="p-intro">
                                {}
                            </div>
                            <div className="p-btns">
                                <a href={userProfile.projects[index].link} target="_blank">Preview</a>
                                <a href={userProfile.projects[index].repo} target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (index !== num  && 
                    <span className="material-symbols-outlined next" 
                    onClick={next} 
                    >
                    arrow_forward_ios
                    </span>
                    )
                }
            </div>
        </motion.div>
    )
}