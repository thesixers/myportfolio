import { useEffect, useState } from "react";

export default function useTheme() {
  // 1. Initialize state with logic: Local Storage -> System Pref -> Light
  const [theme, setTheme] = useState(() => {
    // Check if we already saved a preference
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    // If not, check if the browser prefers dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // Fallback default
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // 2. Remove old class, add new class
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);

    // 3. Save choice to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}