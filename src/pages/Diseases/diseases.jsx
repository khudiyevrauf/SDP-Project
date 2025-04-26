import React, { useContext, useEffect } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Diseases/diseases.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useLanguage } from "../../Context/languageContext";
import { translations, diseasesData } from "../../data";

const Diseases = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage();

  const chronicDiseases = diseasesData;

    useEffect(() => {
      document.title =
        language === "en"
          ? "Diseases "
          : language === "az"
          ? "Xəstəliklər"
          : "Болезни";
    }, [language]);

  const renderTable = (title, data) => (
    <>
      <h2 className={styles.sectionTitle}>{translations[language][title]}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{translations[language].date}</th>
            <th>{translations[language].diagnosis}</th>
            <th>{translations[language].clinic}</th>
            <th>{translations[language].doctor}</th>
            <th>{translations[language].action}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((dateKey, index) => (
            <tr key={index}>
              <td data-label={translations[language].date}>{dateKey}</td>
              <td data-label={translations[language].diagnosis}>
                {data[dateKey][language].diagnosis}
              </td>
              <td data-label={translations[language].clinic}>
                {data[dateKey][language].clinic}
              </td>
              <td data-label={translations[language].doctor}>
                {data[dateKey][language].doctor}
              </td>
              <td data-label={translations[language].action}>
                <button className={styles.detailsButton}>
                  {translations[language].details}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return (
    <div
      className={`${styles.diseasesPage} ${
        darkMode ? styles.darkDiseasesPage : ""
      }`}
    >
      <Sidebar />
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            {renderTable("chronicDiseases", chronicDiseases)}
            {renderTable("diseases", chronicDiseases)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
