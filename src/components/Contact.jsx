import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [copied, setCopied] = useState(false);

    const myEmail = "nnamdiamaga2k20@gmail.com"; // REPLACE THIS with your actual email

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(myEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) return;

        setStatus('loading');

        try {
            // Replace with your Formspree ID
            let res = await fetch("https://formspree.io/f/your_form_id", { 
                method: "POST",
                body: JSON.stringify({ name, email, message }),
                headers: { "Content-Type": "application/json" }
            });

            if (!res.ok) throw new Error("Failed");
            
            setStatus('success');
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus('idle'), 4000);

        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" ref={ref} className="w-full max-w-5xl mx-auto py-24 px-6 md:px-12">
            
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
                {/* LEFT SIDE: The Pitch */}
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                        Let's start a <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Revolution.
                        </span>
                    </h2>
                    
                    <p className="text-slate-500 text-lg leading-relaxed">
                        I'm currently open to new projects and crazy ideas. 
                        Whether you need a secure Web3 architecture or a stunning Webtoon platform, 
                        I'm ready to build.
                    </p>

                    {/* Copy Email Interaction */}
                    <div 
                        onClick={copyEmail}
                        className="group flex items-center gap-4 cursor-pointer w-fit p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300"
                    >
                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform text-2xl">
                            📧
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Me Directly</p>
                            <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {copied ? "Copied to clipboard! ✅" : myEmail}
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: The Conversational Form */}
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-bl-full opacity-20 pointer-events-none"></div>

                    <form onSubmit={sendMessage} className="relative z-10 font-medium text-lg md:text-2xl leading-relaxed text-slate-400">
                        <p>
                            Hey <span className="text-slate-900 font-bold">GeNeSix</span>,
                        </p>
                        
                        <div className="my-4">
                            My name is 
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="inline-block bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 text-slate-900 outline-none px-2 py-1 mx-2 w-full md:w-auto transition-colors placeholder:text-slate-300"
                            />
                            .
                        </div>

                        <div className="my-4">
                            I'd like to talk about 
                            <input 
                                type="text" 
                                name="message"
                                placeholder="a project / idea"
                                value={formData.message}
                                onChange={handleChange}
                                className="inline-block bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 text-slate-900 outline-none px-2 py-1 mx-2 w-full md:w-auto transition-colors placeholder:text-slate-300"
                            />
                            .
                        </div>

                        <div className="my-4">
                            You can reach me at 
                            <input 
                                type="email" 
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="inline-block bg-transparent border-b-2 border-slate-200 focus:border-indigo-500 text-slate-900 outline-none px-2 py-1 mx-2 w-full md:w-auto transition-colors placeholder:text-slate-300"
                            />
                            to discuss further.
                        </div>

                        <motion.button 
                            disabled={status === 'loading' || status === 'success'}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`mt-8 px-8 py-4 rounded-full font-bold text-white text-base shadow-lg transition-all flex items-center gap-2
                                ${status === 'success' ? 'bg-green-500' : 
                                  status === 'error' ? 'bg-red-500' : 
                                  'bg-slate-900 hover:bg-indigo-600'}`}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <>Send It <span className="text-xl">🚀</span></>
                                )}
                                {status === 'loading' && "Transmitting..."}
                                {status === 'success' && "Received! 📬"}
                                {status === 'error' && "Error! ⚠️"}
                            </AnimatePresence>
                        </motion.button>
                    </form>
                </div>

            </motion.div>
        </section>
    )
}