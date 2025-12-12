import { motion } from "framer-motion";

const services = [
    { 
        title: "The Builder", 
        subtitle: "Full Stack Architecture",
        icon: "🛠️", 
        desc: "I move fast from concept to deployment. Whether it's a secure messaging app like Nexa or a complex booking platform, I build scalable backends (Node/Fastify) and reactive frontends." 
    },
    { 
        title: "The Versatile Dev", 
        subtitle: "Web, Mobile & AI",
        icon: "🌐", 
        desc: "I drive the whole highway. From React Native mobile apps to integrating Voice Models and LLMs into everyday applications. If it can be imagined, I can build it." 
    },
    { 
        title: "The Problem Solver", 
        subtitle: "Security & Optimization",
        icon: "🔐", 
        desc: "I don't just follow tutorials. I break things to rebuild them better. Focused on client-side encryption, network security, and debugging the impossible." 
    },
];

export default function Services() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">What I Bring to the Table</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Turning wild "what if?" ideas into fully functional code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>

                            <div className="text-5xl mb-6 relative z-10">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{service.title}</h3>
                            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 block">{service.subtitle}</span>
                            
                            <p className="text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}