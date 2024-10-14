import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
      <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
              theme === "dark" ? "bg-green-700" : "bg-green-500"
          } text-white shadow-md hover:bg-green-600`}
      >
        {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
      </button>
  );
};

export default DarkMode;
