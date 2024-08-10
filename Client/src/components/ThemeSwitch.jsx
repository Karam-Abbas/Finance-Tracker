import React, { useEffect, useState } from "react";
import "../../public/stylesheets/ThemeBtn.css";
const ThemeSwitch = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        setTheme(true);
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);
  const toggleTheme = () => {
    setTheme((prevMode) => {
      const newMode = !prevMode;
      document.body.setAttribute('data-theme', newMode ? 'dark' : 'light');
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Save the theme to localStorage
      return newMode;
    });
  };

  return (
    <div className="toggle-container flex items-center justify-center">
        <span><img src="/images/sun.png" alt="" /></span>
        <input 
            type="checkbox" 
            id="toggle" 
            className="toggle-input" 
            checked={theme} 
            onChange={toggleTheme}
        />
        <label htmlFor="toggle" className="toggle-label"></label>
        <span><img src="/images/moon.png" alt="" /></span>
    </div>
);
};

export default ThemeSwitch;