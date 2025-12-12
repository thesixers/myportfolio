import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Journey from './components/Journey'
import Services from './components/Services'

// 1. The "Bouncy" Section Wrapper
const Section = ({ children, id, setCurrentNav }) => {
  return (
    <motion.section
      id={id}
      // Tailwind: min-h-screen, center content, relative positioning
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onViewportEnter={() => setCurrentNav(id)}
    >
      {children}
    </motion.section>
  )
}

// 2. Custom Cursor (Tailwind Styled)
const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      // Tailwind: Fixed, rounded full, pointer-events-none, z-index 50
      className="fixed top-0 left-0 w-8 h-8 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-80"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}

function App() {
  const [currentNav, setCurrentNav] = useState('Intro')
  
  // 3. Fun Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // Tailwind: Light gray bg, hidden horizontal overflow
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-indigo-200">
      
      {/* Progress Bar: Fixed at top, h-2, gradient color */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-[60]" 
        style={{ scaleX }} 
      />
      
      {/* Hide cursor on desktop to show custom one */}
      <div className="hidden md:block">
        <Cursor />
      </div>

      <Nav currentNav={currentNav} setCurrentNav={setCurrentNav}/>

      <div className="flex flex-col">
        {/* REARRANGED ORDER */}
        <Section id="Intro" setCurrentNav={setCurrentNav}>
          <Intro/>
        </Section>

        <Section id="Services" setCurrentNav={setCurrentNav}>
          <Services/>
        </Section>

        <Section id="Projects" setCurrentNav={setCurrentNav}>
          <Projects/>
        </Section>

        <Section id="Journey" setCurrentNav={setCurrentNav}>
          <Journey/>
        </Section>

        <Section id="Skill" setCurrentNav={setCurrentNav}>
          <Skill/>
        </Section>

        <Section id="Contact" setCurrentNav={setCurrentNav}>
          <Contact/>
        </Section>
        
        <Footer/>
      </div>
    </div>
  )
}

export default App