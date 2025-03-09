// import { userProfile } from "../utils"
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Contact(){
    const ref = useRef(null);
    const isInView = useInView(ref);

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
                <form action="">
                    <input type="text"  placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea type="text" className="message-input"  placeholder="Message"/>
                    <button>Send</button>
                </form>
            </div>
        </div>
        </motion.div>
    )
}