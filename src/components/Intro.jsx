import {userProfile} from '../utils'
import me from '../assets/NA.jpeg'


export default function Intro(){
    return(
        <div className="into-container" id='me'>
                <div className="intro-icon">
                        <img className='my-photo' src={me} alt="" />
                </div>
            <div className="intro-message">
                <div>Hi, I’m Joe</div>
                <p>
                {
                    userProfile.bio
                }
                <div className="socials">
                    {
                        userProfile.socials.map((img, i) => {
                            let {name, link} = img;
                            return(
                                <a href={link} key={i}>
                                   <img src={`/${name}`} alt="" className="social-img" />
                                </a>
                            )
                        })
                    }
                </div>
                </p>
                
                <a href={userProfile.cv} download className='cv-link'>Download CV</a>
            </div>
        </div>
    )
}