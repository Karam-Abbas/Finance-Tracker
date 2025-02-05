import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      // If no saved theme, set based on system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.body.setAttribute("data-theme", systemTheme);
      localStorage.setItem("theme", systemTheme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches);
        document.body.setAttribute("data-theme", e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevMode) => {
      const newMode = !prevMode;
      const newTheme = newMode ? "dark" : "light";
      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return newMode;
    });
  };

  return (
    <div className="relative flex items-center gap-2">
      <Sun className={`bg-transparent w-4 h-4 transition-colors duration-200 ${theme ? 'text-gray-400' : 'text-yellow-500'}`} />
      <button
        onClick={toggleTheme}
        className={`
          relative w-7 h-5 rounded-full p-1 transition-colors duration-200
          ${theme ? 'bg-blue-600' : 'bg-gray-200'}
        `}
        aria-label={`Switch to ${theme ? 'light' : 'dark'} mode`}
      >
        <span
          className={`
            block w-3 h-3 rounded-full bg-white shadow-lg transform transition-transform duration-200
            ${theme ? 'translate-x-2' : 'translate-x-0'}
          `}
        />
        <span className="sr-only">
          Toggle {theme ? 'Light' : 'Dark'} Mode
        </span>
      </button>
      <Moon className={`w-4 h-4 transition-colors duration-200 ${theme ? 'text-blue-300' : 'text-gray-400'}`} />

      {/* Animation overlay */}
      <div
        className={`
          fixed inset-0 bg-black pointer-events-none transition-opacity duration-1000
          ${theme ? 'opacity-0' : 'opacity-0'}
        `}
        aria-hidden="true"
      />
    </div>
  );
};

export default ThemeSwitch;