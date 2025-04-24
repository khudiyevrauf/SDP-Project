import React, { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Tests/tests.module.css";

const Tests = () => {
  const { darkMode } = useContext(ThemeContext);

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

  const renderTable = (title) => (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Test Name</th>
              <th>Result</th>
              <th>Clinic</th>
              <th>Doctor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((item, index) => (
              <tr key={index}>
                <td data-label="Date">{item.date}</td>
                <td data-label="Test Name">{item.testName}</td>
                <td data-label="Result">{item.result}</td>
                <td data-label="Clinic">{item.clinic}</td>
                <td data-label="Doctor">{item.doctor}</td>
                <td data-label="Action">
                  <button className={styles.detailsButton}>Details</button>
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
          <div className={styles.content}>{renderTable("Tests")}</div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
