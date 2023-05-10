import React, { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClickDarkMode = (darkModeValue) => {
    setDarkMode(darkModeValue);
  };

  return (
    <div className={`page ${darkMode && "dark-mode"} `}>
      <button
        onClick={() => handleClickDarkMode(true)}
        className="dark-mode-button"
      >
        Dark Mode
      </button>
      <button
        onClick={() => handleClickDarkMode(false)}
        className="light-mode-button"
      >
        Light Mode
      </button>
    </div>
  );
}
