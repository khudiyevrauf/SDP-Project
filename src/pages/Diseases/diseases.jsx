import React, { useContext } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Diseases/diseases.module.css";
import { ThemeContext } from "../../Context/themeContext";

const Diseases = () => {
  const { darkMode } = useContext(ThemeContext);

  const chronicDiseases = [
    {
      date: "2025-03-17",
      diagnosis: "Type 2 Diabetes",
      clinic: "Shafa Clinic",
      doctor: "Nigar Hasanova",
    },
    {
      date: "2025-03-08",
      diagnosis: "Hypertension",
      clinic: "Medical Center 2020",
      doctor: "Elchin Mammadov",
    },
    {
      date: "2025-02-20",
      diagnosis: "Asthma",
      clinic: "Ganja Health House",
      doctor: "Rauf Aliyev",
    },
    {
      date: "2025-02-05",
      diagnosis: "Rheumatoid Arthritis",
      clinic: "Baku Medical Center",
      doctor: "Leman Guliyeva",
    },
    {
      date: "2025-01-28",
      diagnosis: "Chronic Kidney Disease",
      clinic: "Healthy Breath Clinic",
      doctor: "Kamran Abbasov",
    },
  ];

  const diseases = [
    {
      date: "2025-03-22",
      diagnosis: "Influenza",
      clinic: "Shafa Clinic",
      doctor: "Nigar Hasanova",
    },
    {
      date: "2025-03-10",
      diagnosis: "Common Cold",
      clinic: "Medical Center 2020",
      doctor: "Elchin Mammadov",
    },
    {
      date: "2025-02-15",
      diagnosis: "Gastroenteritis",
      clinic: "Ganja Health House",
      doctor: "Rauf Aliyev",
    },
    {
      date: "2025-01-28",
      diagnosis: "Pneumonia",
      clinic: "Baku Medical Center",
      doctor: "Leman Guliyeva",
    },
  ];

  const renderTable = (title, data) => (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Clinic</th>
            <th>Doctor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td data-label="Date">{item.date}</td>
              <td data-label="Diagnosis">{item.diagnosis}</td>
              <td data-label="Clinic">{item.clinic}</td>
              <td data-label="Doctor">{item.doctor}</td>
              <td data-label="Action">
                <button className={styles.detailsButton}>Details</button>
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
            {renderTable("Chronic Diseases", chronicDiseases)}
            {renderTable("Diseases", diseases)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
