import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Receipts/receipts.module.css";

const Receipts = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dummyData = Array(5).fill({
    date: "DD/MM/YYYY",
    clinic: "CLINIC_NAME",
    doctor: "DOCTOR_NAME",
  });

  return (
    <div
      className={`${styles.receiptsPage} ${
        darkMode ? styles.darkReceipts : ""
      }`}
    >
      <Sidebar />
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Receipts</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Clinic</th>
                <th>Doctor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td data-label="Date">{item.date}</td>
                  <td data-label="Clinic">{item.clinic}</td>
                  <td data-label="Doctor">{item.doctor}</td>
                  <td data-label="Action">
                    <button
                      className={styles.detailsButton}
                      onClick={openModal}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <h3>Prescription Details</h3>
              <table className={styles.prescriptionTable}>
                <thead>
                  <tr>
                    <th>Medicine</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Paracetamol</td>
                    <td>Twice a day after meals</td>
                  </tr>
                  <tr>
                    <td>Paracetamol</td>
                    <td>Twice a day after meals</td>
                  </tr>
                  <tr>
                    <td>Paracetamol</td>
                    <td>Twice a day after meals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receipts;
