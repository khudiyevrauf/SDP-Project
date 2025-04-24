// src/pages/Home Page/homePage.jsx
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "../Home Page/homePage.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useLanguage } from "../../Context/languageContext"; 

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language, translations } = useLanguage(); // Getting language context

  return (
    <div className={`${styles.homePage} ${darkMode ? styles.darkHomePage : ""}`}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>{translations[language].welcome}</h1>
        <p className={styles.description}>
          {translations[language].description}
        </p>
        <NavLink to="/login" className={styles.loginButton}>
          {translations[language].continueLogin}
        </NavLink>
      </div>

      <div className={styles.teamContainer}>
        <div className={styles.section}>
          <h2>{translations[language].frontendTeam}</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Frontend Dev"
              />
              <h3>Murad Jafarov</h3>
              <p>{translations[language].frontendDeveloper}</p>
              <p>{translations[language].design}</p>
            </div>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Frontend Dev"
              />
              <h3>Rauf Khudiyev</h3>
              <p>{translations[language].frontendDeveloper}</p>
              <p>{translations[language].design}</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>{translations[language].backendTeam}</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Backend Dev"
              />
              <h3>Rahimakhanim Ismayilzada</h3>
              <p>{translations[language].backendDeveloper}</p>
              <p>{translations[language].api}</p>
            </div>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Backend Dev"
              />
              <h3>Kanan Abdullayev</h3>
              <p>{translations[language].backendDeveloper}</p>
              <p>{translations[language].api}</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>{translations[language].externalInstructor}</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Instructor"
              />
              <h3>Lala Guluzada</h3>
              <p>{translations[language].externalInstructor}</p>
              <p>{translations[language].guides}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
