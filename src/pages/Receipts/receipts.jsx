import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Receipts/receipts.module.css";
import { useLanguage } from "../../Context/languageContext"; 

const Receipts = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage(); 

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

  
  const translations = {
    en: {
      pageTitle: "Receipts",
      date: "Date",
      clinic: "Clinic",
      doctor: "Doctor",
      action: "Action",
      details: "Details",
      prescriptionDetails: "Prescription Details",
      medicine: "Medicine",
      usage: "Usage",
    },
    az: {
      pageTitle: "Qəbzlər",
      date: "Tarix",
      clinic: "Klinika",
      doctor: "Həkim",
      action: "Əməliyyat",
      details: "Ətraflı",
      prescriptionDetails: "Rəseptin Detalları",
      medicine: "Dərman",
      usage: "İstifadə",
    },
    rus: {
      pageTitle: "Чеки",
      date: "Дата",
      clinic: "Клиника",
      doctor: "Доктор",
      action: "Действие",
      details: "Детали",
      prescriptionDetails: "Детали рецепта",
      medicine: "Лекарство",
      usage: "Использование",
    },
  };

  const receiptsData = [
    {
      date: "2025-04-23",
      clinic: "Ege Hospital",
      doctor: { en: "Huseyn Aliyev", az: "Hüseyn Əliyev", rus: "Хусейн Алиев" },
      prescription: [
        {
          medicine: {
            en: "Paracetamol",
            az: "Paratsetamol",
            rus: "Парацетамол",
          },
          usage: {
            en: "Twice a day after meals",
            az: "Hər gün yeməkdən sonra iki dəfə",
            rus: "Дважды в день после еды",
          },
        },
        {
          medicine: { en: "Ibuprofen", az: "İbuprofen", rus: "Ибупрофен" },
          usage: {
            en: "Once a day",
            az: "Hər gün bir dəfə",
            rus: "Один раз в день",
          },
        },
      ],
    },
    {
      date: "2025-04-22",
      clinic: "Referance Hospital",
      doctor: { en: "Arif Orucov", az: "Arif Orucov", rus: "Ариф Орджов" },
      prescription: [
        {
          medicine: { en: "Xanax", az: "Zanaks", rus: "Ксанакс" },
          usage: {
            en: "Once a day at bedtime",
            az: "Hər gün yatmazdan əvvəl bir dəfə",
            rus: "Один раз в день перед сном",
          },
        },
        {
          medicine: {
            en: "Amoxicillin",
            az: "Amoksisillin",
            rus: "Амоксициллин",
          },
          usage: {
            en: "Twice a day",
            az: "Gündə iki dəfə",
            rus: "Дважды в день",
          },
        },
      ],
    },
    {
      date: "2025-04-21",
      clinic: "Baku Medical Plaza",
      doctor: {
        en: "Telman Yusifov",
        az: "Telman Yusifov",
        rus: "Телман Юсифов",
      },
      prescription: [
        {
          medicine: {
            en: "Ciprofloxacin",
            az: "Ciprofloksasin",
            rus: "Ципрофлоксацин",
          },
          usage: {
            en: "Every 12 hours",
            az: "Hər 12 saatda",
            rus: "Каждые 12 часов",
          },
        },
        {
          medicine: { en: "Aspirin", az: "Aspirin", rus: "Аспирин" },
          usage: {
            en: "Once a day",
            az: "Hər gün bir dəfə",
            rus: "Один раз в день",
          },
        },
      ],
    },
    {
      date: "2025-04-20",
      clinic: "West Hospital",
      doctor: {
        en: "Kazim Qasimov",
        az: "Kazım Qasımov",
        rus: "Казим Касымов",
      },
      prescription: [
        {
          medicine: { en: "Omeprazole", az: "Omeprazol", rus: "Омепразол" },
          usage: {
            en: "Before meals",
            az: "Yeməkdən əvvəl",
            rus: "Перед едой",
          },
        },
        {
          medicine: {
            en: "Folic acid",
            az: "Fol turşusu",
            rus: "Фолиевая кислота",
          },
          usage: {
            en: "Once a day",
            az: "Hər gün bir dəfə",
            rus: "Один раз в день",
          },
        },
      ],
    },
    {
      date: "2025-04-19",
      clinic: "MedEra Hospital",
      doctor: {
        en: "Aysel Aliyeva",
        az: "Aysel Əliyeva",
        rus: "Айсель Алиева",
      },
      prescription: [
        {
          medicine: {
            en: "Paracetamol",
            az: "Paratsetamol",
            rus: "Парацетамол",
          },
          usage: {
            en: "Twice a day after meals",
            az: "Hər gün yeməkdən sonra iki dəfə",
            rus: "Дважды в день после еды",
          },
        },
        {
          medicine: {
            en: "Amoxicillin",
            az: "Amoksisillin",
            rus: "Амоксициллин",
          },
          usage: {
            en: "Every 8 hours",
            az: "Hər 8 saatda",
            rus: "Каждые 8 часов",
          },
        },
      ],
    },
  ];

  const { pageTitle, date, clinic, doctor, action, details, prescriptionDetails, medicine, usage } =
    translations[language]; 

  return (
    <div
      className={`${styles.receiptsPage} ${darkMode ? styles.darkReceipts : ""}`}
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
                  <td data-label={clinic}>{item.clinic}</td>
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
