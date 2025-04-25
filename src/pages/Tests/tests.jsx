import React, { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Tests/tests.module.css";
import { useLanguage } from "../../Context/languageContext";
import { translations, testData } from "../../data";

const Tests = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage(); 

  const renderTable = (data) => (
    <>
      <h2 className={styles.sectionTitle}>{translations[language].testTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{translations[language].date}</th>
              <th>{translations[language].testName}</th>
              <th>{translations[language].result}</th>
              <th>{translations[language].clinic}</th>
              <th>{translations[language].doctor}</th>
              <th>{translations[language].details}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td data-label={translations[language].date}>{item.date}</td>
                <td data-label={translations[language].testName}>
                  {item.testName[language] || item.testName.en}
                </td>
                <td data-label={translations[language].result}>
                  {item.result[language] || item.result.en}
                </td> 
                <td data-label={translations[language].clinic}>{item.clinic[language] || item.clinic.en}</td>
                <td data-label={translations[language].doctor}>
                  {item.doctor[language] || item.doctor.en}
                </td> 
                <td data-label={translations[language].details}>
                  <button className={styles.detailsButton}>
                    {translations[language].details}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className={`${styles.testPage} ${darkMode ? styles.darkTestPage : ""}`}>
      <Sidebar />
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>{renderTable(testData)}</div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
