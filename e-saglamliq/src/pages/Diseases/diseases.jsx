import React, { useContext } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Diseases/diseases.module.css";
import { ThemeContext } from "../../Context/themeContext";

const Diseases = () => {
  const { darkMode } = useContext(ThemeContext);

  const dummyData = Array(5).fill({
    date: "DD/MM/YYYY",
    diagnosis: "Diagnosis",
    clinic: "CLINIC_NAME",
    doctor: "DOCTOR_NAME",
  });

  const renderTable = (title) => (
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
          {dummyData.map((item, index) => (
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
            {renderTable("Chronic diseases")}
            {renderTable("Diseases")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
