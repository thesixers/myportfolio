import { useRef , useState, useEffect} from "react";
import { userProfile } from "../utils"
import { useInView, motion } from "framer-motion";

export default function Projects(){
    const ref = useRef(null);
  const isInView = useInView(ref);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % userProfile.projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + userProfile.projects.length) % userProfile.projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            id="projects"
        >
            <div>
            <h2 className="title">Projects</h2>
            <div className="projects">
                {
                    userProfile.projects.map((project, index) => {
                        return(
                            <div className="project" key={index}>
                                <img src={project.logo} alt="" />
                                <div className="details">
                                    <div className="p-name">{project.name}</div>
                                    <div className="p-intro">
                                        {project.description}
                                    </div>
                                    <div className="p-btns">
                                        <a href={project.link} target="_blank">Preview</a>
                                        <a href={project.repo} target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </motion.div>
    )
}