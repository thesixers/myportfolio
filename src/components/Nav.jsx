import { motion, useScroll, useSpring } from "framer-motion";
import useTheme from "../hooks/useTheme"; // Import the hook
import Logo from "./Logo"; // Import the Logo component

// 2. SVG Icons
const Icons = {
  Services: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  Work: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  ),
  Skills: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Contact: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
};

// 3. Theme Toggle Component
const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="relative p-2 rounded-full transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10 group ml-2"
    aria-label="Toggle Dark Mode"
  >
    <div className="relative w-6 h-6 overflow-hidden">
      {/* Sun Icon */}
      <motion.svg
        className="absolute inset-0 w-6 h-6 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        animate={{
          y: theme === "dark" ? 30 : 0,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </motion.svg>
      {/* Moon Icon */}
      <motion.svg
        className="absolute inset-0 w-6 h-6 text-indigo-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        initial={{ y: -30 }}
        animate={{
          y: theme === "dark" ? 0 : -30,
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </motion.svg>
    </div>
  </button>
);

export default function Nav({ currentNav, setCurrentNav }) {
  const { theme, toggleTheme } = useTheme();
  // Removed useScroll logic since we removed the progress ring

  const navItems = [
    { id: "Intro", isLogo: true },
    { label: "Services", id: "Services", icon: Icons.Services },
    { label: "Projects", id: "Projects", icon: Icons.Work },
    { label: "Skills", id: "Skill", icon: Icons.Skills },
    { label: "Contact", id: "Contact", icon: Icons.Contact },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 pointer-events-none">
      <nav
        className="
                    relative flex items-center gap-1 p-2
                    pointer-events-auto rounded-full 
                    bg-gradient-to-b from-white/20 to-transparent dark:from-slate-900/60 dark:to-slate-900/10
                    backdrop-blur-xl backdrop-saturate-150
                    border border-white/20 dark:border-white/10
                    shadow-[0_20px_40px_rgba(0,0,0,0.05)]
                "
      >
        {/* SVG Progress Ring removed */}

        {navItems.map((item) => {
          const isActive = currentNav === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setCurrentNav(item.id)}
              className="group relative px-3 md:px-6 py-3 md:py-2 rounded-full transition-all duration-300 flex items-center justify-center z-10"
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.isLogo ? (
                  <Logo isActive={isActive} />
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
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-indigo-600 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4)] shadow-indigo-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          );
        })}

        {/* Divider & Toggle */}
        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1" />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </div>
  );
}
