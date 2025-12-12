import { motion } from 'framer-motion'

// 1. The Dynamic Logo Component
const NavLogo = ({ isActive }) => (
    <motion.div 
        className="flex items-center justify-center font-black text-xl tracking-tighter cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-900'}`}>N</span>
        <span className={`-ml-[2px] transition-colors duration-300 ${isActive ? 'text-indigo-100' : 'text-indigo-600'}`}>A</span>
        <motion.span 
            className={`text-2xl leading-none ml-[1px] transition-colors duration-300 ${isActive ? 'text-indigo-200' : 'text-indigo-600'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            .
        </motion.span>
    </motion.div>
);

// 2. Simple SVG Icons
const Icons = {
    Services: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    Work: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    Skills: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    Contact: (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
}

export default function Nav({ currentNav, setCurrentNav }) {
    const navItems = [
        { id: 'Intro', isLogo: true }, 
        { label: 'Services', id: 'Services', icon: Icons.Services },
        { label: 'Projects', id: 'Projects', icon: Icons.Work },
        { label: 'Skills', id: 'Skill', icon: Icons.Skills },
        { label: 'Contact', id: 'Contact', icon: Icons.Contact }
    ]

    return (
        <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 pointer-events-none">
            <nav 
                className="
                    flex items-center gap-1 p-2 overflow-hidden
                    pointer-events-auto rounded-full 
                    
                    /* ULTRA TRANSPARENT GLASS */
                    bg-gradient-to-b from-white/20 to-transparent
                    backdrop-blur-xl 
                    backdrop-saturate-150
                    border border-white/20
                    shadow-[0_20px_40px_rgba(0,0,0,0.05)]
                    ring-1 ring-white/30 ring-inset
                "
            >
                {navItems.map((item) => {
                    const isActive = currentNav === item.id;
                    const Icon = item.icon;
                    
                    return (
                        <a 
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setCurrentNav(item.id)}
                            className="group relative px-3 md:px-6 py-3 md:py-2 rounded-full transition-all duration-300 flex items-center justify-center"
                        >
                            <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-800 hover:text-indigo-600'}`}>
                                {item.isLogo ? (
                                    <NavLogo isActive={isActive} />
                                ) : (
                                    <>
                                        <span className="block md:hidden">
                                            <Icon className="w-6 h-6" />
                                        </span>
                                        <span className="hidden md:block text-sm font-bold tracking-wide">
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </span>

                            {/* The 3D Liquid Pill */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-full bg-indigo-600 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4)] shadow-indigo-500/30"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}