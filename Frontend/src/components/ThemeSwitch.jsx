import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (  
      <button onClick={toggleTheme} className="p-2">
      {theme === "dark" ? <Sun size={20} className="stroke-white"/> : <Moon size={20} />}
    </button>
  );
};

export default ThemeSwitch;
