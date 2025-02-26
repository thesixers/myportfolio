import { userProfile } from "../utils"

export default function Projects(){
    return(
        <div id="projects">
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
    )
}