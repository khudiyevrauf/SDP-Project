import React, { useContext } from "react";
import { useLanguage } from "../../Context/languageContext";
import styles from "./languageButton.module.css"; 
import { ThemeContext } from "../../Context/themeContext"; 

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage(); 
  const { darkMode } = useContext(ThemeContext);
  
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value); 
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
