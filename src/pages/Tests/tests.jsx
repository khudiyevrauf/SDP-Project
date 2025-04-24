import React, { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Tests/tests.module.css";
import { useLanguage } from "../../Context/languageContext"; // Import the language context

const Tests = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage(); // Get the current language

  // Define translations directly inside the file
  const translations = {
    en: {
      details: "Details",
      pageTitle: "Tests",
      date: "Date",
      testName: "Test Name",
      result: "Result",
      clinic: "Clinic",
      doctor: "Doctor",
      "Blood Test": "Blood Test",
      "X-ray": "X-ray",
      "CT Scan": "CT Scan",
      "MRI": "MRI",
      "Ultrasound": "Ultrasound",
      "Positive": "Positive",
      "Negative": "Negative",
      "Rasim Qulamov": "Rasim Qulamov",
      "Türkan İsmayılova": "Türkan İsmayılova",
      "Telman Yusifov": "Telman Yusifov",
      "Arif Orucov": "Arif Orucov",
      "Samin Qulamov": "Samin Qulamov",
    },
    az: {
      details: "Ətraflı",
      pageTitle: "Testlər",
      date: "Tarix",
      testName: "Test Adı",
      result: "Nəticə",
      clinic: "Klinika",
      doctor: "Həkim",
      "Blood Test": "Qan testi",
      "X-ray": "Rentgen",
      "CT Scan": "CT Skani",
      "MRI": "MRT",
      "Ultrasound": "Ultrasəs",
      "Positive": "Müsbət",
      "Negative": "Mənfi",
      "Rasim Qulamov": "Rasim Qulamov",
      "Türkan İsmayılova": "Türkan İsmayılova",
      "Telman Yusifov": "Telman Yusifov",
      "Arif Orucov": "Arif Orucov",
      "Samin Qulamov": "Samin Qulamov",
    },
    rus: {
      details: "Детали",
      pageTitle: "Тесты",
      date: "Дата",
      testName: "Название теста",
      result: "Результат",
      clinic: "Клиника",
      doctor: "Доктор",
      "Blood Test": "Анализ крови",
      "X-ray": "Рентген",
      "CT Scan": "КТ сканирование",
      "MRI": "МРТ",
      "Ultrasound": "УЗИ",
      "Positive": "Положительный",
      "Negative": "Отрицательный",
      "Rasim Qulamov": "Расим Гуланов",
      "Türkan İsmayılova": "Тюркан Исмайлова",
      "Telman Yusifov": "Телман Юсифов",
      "Arif Orucov": "Ариф Орджов",
      "Samin Qulamov": "Самин Гуланов",
    },
  };

  const testData = [
    {
      date: "2025-04-23",
      testName: "Blood Test",
      result: "Positive",
      clinic: "Baku Medical Plaza",
      doctor: "Rasim Qulamov",
    },
    {
      date: "2025-04-22",
      testName: "X-ray",
      result: "Negative",
      clinic: "Referance Hospital",
      doctor: "Türkan İsmayılova",
    },
    {
      date: "2025-04-21",
      testName: "CT Scan",
      result: "Positive",
      clinic: "Ege Hospital",
      doctor: "Telman Yusifov",
    },
    {
      date: "2025-04-20",
      testName: "MRI",
      result: "Negative",
      clinic: "Baku Medical Plaza",
      doctor: "Arif Orucov",
    },
    {
      date: "2025-04-19",
      testName: "Ultrasound",
      result: "Positive",
      clinic: "Baku Medical Plaza",
      doctor: "Samin Qulamov",
    },
  ];

  const { pageTitle, date, testName, result, clinic, doctor, details } =
    translations[language]; // Get translations based on the selected language

  const renderTable = (data) => (
    <>
      <h2 className={styles.sectionTitle}>{pageTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{date}</th>
              <th>{testName}</th>
              <th>{result}</th>
              <th>{clinic}</th>
              <th>{doctor}</th>
              <th>{details}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td data-label={date}>{item.date}</td>
                <td data-label={testName}>{translations[language][item.testName]}</td> {/* Translate test name */}
                <td data-label={result}>{translations[language][item.result]}</td> {/* Translate result */}
                <td data-label={clinic}>{item.clinic}</td>
                <td data-label={doctor}>{translations[language][item.doctor]}</td> {/* Translate doctor */}
                <td data-label={details}>
                  <button className={styles.detailsButton}>
                    {details} {/* Use translated text */}
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
    <div
      className={`${styles.testPage} ${darkMode ? styles.darkTestPage : ""}`}
    >
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
