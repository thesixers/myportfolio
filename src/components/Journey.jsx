import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

// The Nnamdi Saga
const events = [
  { 
      year: "2023", 
      title: "The Awakening", 
      desc: "Started my journey with the holy trinity: HTML, CSS, and JavaScript. I realized I didn't just want to use the web; I wanted to build it." 
  },
  { 
      year: "2023 - Late", 
      title: "The Full Stack Leap", 
      desc: "Moved quickly into Node.js and React. Built 'The Webtoon Project' and started understanding the beauty of backend architecture." 
  },
  { 
      year: "2024", 
      title: "Nexa & Architecture", 
      desc: "Architected Nexa using WebSockets and Encryption. Deep dived into Linux (Fedora), Real-time systems, and Mobile Dev with React Native." 
  },
  { 
      year: "Present", 
      title: "The Multi-Stack Maverick", 
      desc: "Focusing on AI Integration (Course Builder), Security/Ethical Hacking, and optimizing systems. Rooting phones and debugging the impossible." 
  },
];

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} className="py-24 max-w-4xl mx-auto relative px-4 overflow-hidden">
        
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                The Origin Story <span className="text-indigo-500">.</span>
            </h2>
        </div>

      {/* The Central Line */}
      <div className="absolute left-8 md:left-1/2 top-40 bottom-20 w-1 bg-slate-100 origin-top transform -translate-x-1/2">
        <motion.div 
            style={{ scaleY }} 
            className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-600 origin-top"
        />
      </div>

      <div className="space-y-16">
        {events.map((event, i) => (
          <EventCard key={i} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}

const EventCard = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
        >
            {/* The Dot on the Line */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full z-10 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>

            {/* Empty space for alignment */}
            <div className="hidden md:block w-1/2" />

            {/* The Content Card */}
            <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-bold rounded-full mb-2">
                        {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">{event.desc}</p>
                </div>
            </div>
        </motion.div>
    )
}