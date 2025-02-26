import { userProfile } from "../utils"

export default function Skill(){
    return(
        <div id="skill">
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
    )
}