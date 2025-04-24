import React, { useContext } from "react";
import { useLanguage } from "../../Context/languageContext"; // Import the hook
import styles from "./languageButton.module.css"; // Import the CSS module
import { ThemeContext } from "../../Context/themeContext"; // Import ThemeContext

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage(); // Destructure language and changeLanguage
  const { darkMode } = useContext(ThemeContext); // Get the darkMode state from ThemeContext
  
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value); // Update the language when the option is selected
  };

  return (
    <div className={styles.languageContainer}>
      <select
        className={`${styles.languageSelect} ${darkMode ? styles.darkLanguageButton : ""}`}
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">En</option>
        <option value="az">Az</option>
        <option value="rus">Ru</option>
      </select>
    </div>
  );
};

export default LanguageButton;
