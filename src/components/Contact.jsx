import { userProfile } from "../utils"

export default function Contact(){
    return(
        <div id="contact">
            <h2>Message Me</h2>
            <div className="socials-wrapper">
                <form action="">
                    <input type="text"  placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea type="text" className="message-input"  placeholder="Message"/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}