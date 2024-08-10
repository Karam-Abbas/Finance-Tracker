import React, { useEffect, useState } from "react";

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
    <div>
      <label>
        <input type="checkbox" checked={theme} onChange={toggleTheme} />
        {theme ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      </label>
    </div>
  );
};

export default ThemeSwitch;