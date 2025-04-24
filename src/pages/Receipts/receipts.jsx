import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Receipts/receipts.module.css";

const Receipts = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const openModal = (receipt) => {
    setSelectedReceipt(receipt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReceipt(null);
  };

  const receiptsData = [
    {
      date: "2025-04-23",
      clinic: "Ege Hospital ",
      doctor: "Huseyn Aliyev",
      prescription: [
        { medicine: "Paracetamol", usage: "Twice a day after meals" },
        { medicine: "Ibuprofen", usage: "Once a day" },
      ],
    },
    {
      date: "2025-04-22",
      clinic: "Referance Hospital",
      doctor: "Arif Orucov",
      prescription: [
        { medicine: "Xanax", usage: "Once a day at bedtime" },
        { medicine: "Amoxicillin", usage: "Twice a day" },
      ],
    },
    {
      date: "2025-04-21",
      clinic: "Baku Medical Plaza",
      doctor: "Telman Yusifov",
      prescription: [
        { medicine: "Ciprofloxacin", usage: "Every 12 hours" },
        { medicine: "Aspirin", usage: "Once a day" },
      ],
    },
    {
      date: "2025-04-20",
      clinic: "West Hospital",
      doctor: "Kazim Qasimov",
      prescription: [
        { medicine: "Omeprazole", usage: "Before meals" },
        { medicine: "Folic acid", usage: "Once a day" },
      ],
    },
    {
      date: "2025-04-19",
      clinic: "MedEra Hospital",
      doctor: "Aysel Aliyeva",
      prescription: [
        { medicine: "Paracetamol", usage: "Twice a day after meals" },
        { medicine: "Amoxicillin", usage: "Every 8 hours" },
      ],
    },
  ];

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
              {receiptsData.map((item, index) => (
                <tr key={index}>
                  <td data-label="Date">{item.date}</td>
                  <td data-label="Clinic">{item.clinic}</td>
                  <td data-label="Doctor">{item.doctor}</td>
                  <td data-label="Action">
                    <button
                      className={styles.detailsButton}
                      onClick={() => openModal(item)} // Pass the item to the modal
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && selectedReceipt && (
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
                  {selectedReceipt.prescription.map((med, index) => (
                    <tr key={index}>
                      <td>{med.medicine}</td>
                      <td>{med.usage}</td>
                    </tr>
                  ))}
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
