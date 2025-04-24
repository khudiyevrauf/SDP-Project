import React, { useContext } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Diseases/diseases.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useLanguage } from "../../Context/languageContext"; // Import the useLanguage hook

const Diseases = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage(); // Get the current language

  // Translation object
  const translations = {
    en: {
      chronicDiseases: "Chronic Diseases",
      diseases: "Diseases",
      date: "Date",
      diagnosis: "Diagnosis",
      clinic: "Clinic",
      doctor: "Doctor",
      action: "Action",
      details: "Details",
      data: {
        "2025-03-17": { diagnosis: "Type 2 Diabetes", clinic: "Shafa Clinic", doctor: "Nigar Hasanova" },
        "2025-03-08": { diagnosis: "Hypertension", clinic: "Medical Center 2020", doctor: "Elchin Mammadov" },
        "2025-02-20": { diagnosis: "Asthma", clinic: "Ganja Health House", doctor: "Rauf Aliyev" },
        "2025-02-05": { diagnosis: "Rheumatoid Arthritis", clinic: "Baku Medical Center", doctor: "Leman Guliyeva" },
        "2025-01-28": { diagnosis: "Chronic Kidney Disease", clinic: "Healthy Breath Clinic", doctor: "Kamran Abbasov" }
      }
    },
    az: {
      chronicDiseases: "Xroniki Xəstəliklər",
      diseases: "Xəstəliklər",
      date: "Tarix",
      diagnosis: "Diaqnoz",
      clinic: "Klinika",
      doctor: "Həkim",
      action: "Əməliyyat",
      details: "Ətraflı",
      data: {
        "2025-03-17": { diagnosis: "2-ci Tip Şəkərli Diabet", clinic: "Şəfa Klinika", doctor: "Nigar Hasanova" },
        "2025-03-08": { diagnosis: "Hipertenziya", clinic: "Medical Center 2020", doctor: "Elçin Məmmədov" },
        "2025-02-20": { diagnosis: "Astma", clinic: "Gəncə Sağlamlıq Evi", doctor: "Rauf Əliyev" },
        "2025-02-05": { diagnosis: "Revmatoid Artrit", clinic: "Bakı Tibb Mərkəzi", doctor: "Ləman Quliyeva" },
        "2025-01-28": { diagnosis: "Xroniki Böyrək Xəstəliyi", clinic: "Healthy Breath Clinic", doctor: "Kamran Abbasov" }
      }
    },
    rus: {
      chronicDiseases: "Хронические болезни",
      diseases: "Болезни",
      date: "Дата",
      diagnosis: "Диагноз",
      clinic: "Клиника",
      doctor: "Доктор",
      action: "Действие",
      details: "Детали",
      data: {
        "2025-03-17": { diagnosis: "Диабет 2 типа", clinic: "Клиника Шафа", doctor: "Нигар Хасановa" },
        "2025-03-08": { diagnosis: "Гипертония", clinic: "Медицинский центр 2020", doctor: "Эльчин Мамедов" },
        "2025-02-20": { diagnosis: "Астма", clinic: "Гянджа Медицинский дом", doctor: "Рафаэль Алиев" },
        "2025-02-05": { diagnosis: "Ревматоидный артрит", clinic: "Баку Медицинский Центр", doctor: "Лейман Гулиева" },
        "2025-01-28": { diagnosis: "Хроническая болезнь почек", clinic: "Клиника Здорового дыхания", doctor: "Камран Аббасов" }
      }
    }
  };

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
              <td data-label={translations[language].diagnosis}>{data[dateKey].diagnosis}</td>
              <td data-label={translations[language].clinic}>{data[dateKey].clinic}</td>
              <td data-label={translations[language].doctor}>{data[dateKey].doctor}</td>
              <td data-label={translations[language].action}>
                <button className={styles.detailsButton}>{translations[language].details}</button>
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
            {renderTable("chronicDiseases", translations[language].data)}
            {renderTable("diseases", translations[language].data)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
