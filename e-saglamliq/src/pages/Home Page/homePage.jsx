import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "../Home Page/homePage.module.css";
import { ThemeContext } from "../../Context/themeContext";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.homePage} ${darkMode ? styles.darkHomePage : ""}`}
    >
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to E-Saglamliq</h1>
        <p className={styles.description}>
          E-Saglamliq is your centralized e-health portal providing seamless
          access to your medical records, hospital visits, prescriptions, tests,
          and doctor communications—all in one place. Our mission is to simplify
          and secure your healthcare experience.
        </p>
        <NavLink to="/login" className={styles.loginButton}>
          Continue Log In
        </NavLink>
      </div>

      <div className={styles.teamContainer}>
        <div className={styles.section}>
          <h2>Frontend Team</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Frontend Dev"
              />
              <h3>Murad Jafarov</h3>
              <p>Frontend Developer</p>
              <p>Design</p>
            </div>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Frontend Dev"
              />
              <h3>Rauf Khudiyev</h3>
              <p>Frontend Developer</p>
              <p>Design</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Backend Team</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Backend Dev"
              />
              <h3>Rahimakhanim Ismayilzada</h3>
              <p>Backend Developer</p>
              <p>API</p>
            </div>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Backend Dev"
              />
              <h3>Kanan Abdullayev</h3>
              <p>Backend Developer</p>
              <p>API</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>External Instructor</h2>
          <div className={styles.members}>
            <div className={styles.card}>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                alt="Instructor"
              />
              <h3>Lala Guluzada</h3>
              <p>External Instructor</p>
              <p>Guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
