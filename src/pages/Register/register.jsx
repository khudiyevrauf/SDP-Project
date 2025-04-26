import React, { useEffect, useContext } from "react";
import styles from "../Register/register.module.css";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../Context/languageContext";
import LanguageButton from "../../components/language button/languageButton";
import { ThemeContext } from "../../Context/themeContext";
import { translations } from "../../data";

const Register = () => {
  const { language } = useLanguage();
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.title =
      language === "en"
        ? "Sign Up"
        : language === "az"
        ? "Qeydiyyat"
        : "Регистрация";
  }, [language]);

  return (
    <div
      className={`${styles.registerPage} ${
        darkMode ? styles.darkRegisterPage : ""
      }`}
    >
      <LanguageButton />
      <h2 className={styles.title}>{translations[language].registerTitle}</h2>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>{translations[language].fullName}</label>
          <input type="text" placeholder={translations[language].fullName} />
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].dob}</label>
          <input type="date" />
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].gender}</label>
          <select>
            <option value="">{translations[language].genderSelect}</option>
            <option value="female">{translations[language].female}</option>
            <option value="male">{translations[language].male}</option>
            <option value="other">{translations[language].other}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].id}</label>
          <input type="text" placeholder={translations[language].id} />
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].phone}</label>
          <input type="tel" placeholder={translations[language].phone} />
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].email}</label>
          <input type="email" placeholder={translations[language].email} />
        </div>

        <div className={styles.formGroup}>
          <label>{translations[language].address}</label>
          <textarea
            placeholder={translations[language].address}
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          {translations[language].register}
        </button>

        <p className={styles.footerText}>
          {translations[language].alreadyAccount}
          <NavLink to="/login">{translations[language].signIn}</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
