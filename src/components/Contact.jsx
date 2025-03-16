// import { userProfile } from "../utils"
import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async () => {
        if(!name || !email || !message || isLoading) return;
        setIsLoading(true)
        try {
            let res = await fetch("", {
                method: "POST",
                body: JSON.stringify({name, email, message}),
                headers: {"Content-Type": "applicaion/json"}
            })
    
            if(!res.ok) alert("Error occured message not sent")
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false)
        }
    }

    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            id="contact"
        >
            <div>
            <h2>Message Me</h2>
            <div className="socials-wrapper">
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type="text" onInput={(e) => {setName(e.target.value)}} placeholder="Name"/>
                    <input type="text" onInput={(e) => {setEmail(e.target.value)}} placeholder="Email" />
                    <textarea type="text" onInput={(e) => {setMessage(e.target.value)}} className="message-input"  placeholder="Message"/>
                    <button onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
        </motion.div>
    )
}