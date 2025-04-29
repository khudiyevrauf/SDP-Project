import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Receipts/receipts.module.css";
import { useLanguage } from "../../Context/languageContext";
import { translations, receiptsData } from "../../data";

const Receipts = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  useEffect(() => {
    document.title =
      language === "en"
        ? "Recipes"
        : language === "az"
        ? "Reseptlər"
        : "Pецепты";
  }, [language]);

  const openModal = (receipt) => {
    setSelectedReceipt(receipt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReceipt(null);
  };

  const {
    pageTitle,
    date,
    clinic,
    doctor,
    action,
    details,
    prescriptionDetails,
    medicine,
    usage,
  } = translations[language];

  return (
    <div
      className={`${styles.receiptsPage} ${
        darkMode ? styles.darkReceipts : ""
      }`}
    >
      <Sidebar />
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>{pageTitle}</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{date}</th>
                <th>{clinic}</th>
                <th>{doctor}</th>
                <th>{action}</th>
              </tr>
            </thead>
            <tbody>
              {receiptsData.map((item, index) => (
                <tr key={index}>
                  <td data-label={date}>{item.date}</td>
                  <td data-label={clinic}>{item.clinic[language]}</td>
                  <td data-label={doctor}>{item.doctor[language]}</td>
                  <td data-label={action}>
                    <button
                      className={styles.detailsButton}
                      onClick={() => openModal(item)}
                    >
                      {details}
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
              <h3>{prescriptionDetails}</h3>
              <table className={styles.prescriptionTable}>
                <thead>
                  <tr>
                    <th>{medicine}</th>
                    <th>{usage}</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedReceipt.prescription.map((med, index) => (
                    <tr key={index}>
                      <td>{med.medicine[language]}</td>
                      <td>{med.usage[language]}</td>
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
