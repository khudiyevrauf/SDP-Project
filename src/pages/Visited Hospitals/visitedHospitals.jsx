import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/themeContext";
import { useLanguage } from "../../Context/languageContext";
import dayjs from "dayjs";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Visited Hospitals/visitedHospitals.module.css";
import { hospitalData } from "../../data";

const VisitedHospitals = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage();

  const [cards, setCards] = useState(hospitalData);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    document.title =
      language === "en"
        ? "Visited Hsopitals"
        : language === "az"
        ? "Ziyarət Edilən Xəstəxanalar"
        : "Посещенные Больницы";
  }, [language]);

  const hideCard = (id) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, visible: false } : card))
    );
  };

  const showAllCards = () => {
    setCards((prev) => prev.map((card) => ({ ...card, visible: true })));
    setActiveMenu(null);
  };

  const toggleMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption("");
    if (value === "all") {
      showAllCards();
    }
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div
      className={`${styles.visitedHospitals} ${
        darkMode ? styles.darkVisitedHospitals : ""
      }`}
    >
      <Header />
      <Sidebar />
      <main className={styles.mainContent}>
        <h2 className={styles.title}>
          {language === "en"
            ? "Visited Hospitals"
            : language === "az"
            ? "Ziyarət Edilən Xəstəxanalar"
            : "Посещенные Больницы"}
        </h2>

        <div className={styles.filterBar}>
          <div className={styles.filterBarDate}>
            <button className={styles.filterButton}>
              {language === "en"
                ? "Last 30 days"
                : language === "az"
                ? "Son 30 gün"
                : "Последние 30 дней"}
            </button>
            <button className={styles.filterButton}>
              {language === "en"
                ? "Last 6 months"
                : language === "az"
                ? "Son 6 ay"
                : "Последние 6 месяцев"}
            </button>
            <button className={styles.filterButton}>
              {language === "en" ? "2024" : language === "az" ? "2024" : "2024"}
            </button>
            <input
              type="date"
              className={styles.dateInput}
              defaultValue={dayjs().subtract(1, "month").format("YYYY-MM-DD")}
            />
            <span className={styles.dateSeparator}>→</span>
            <input
              type="date"
              className={styles.dateInput}
              defaultValue={dayjs().format("YYYY-MM-DD")}
            />
          </div>

          <select
            className={styles.sortDropdown}
            onChange={handleSortChange}
            value={sortOption}
          >
            <option value="" disabled hidden>
              {language === "en"
                ? "Sort By"
                : language === "az"
                ? "Sıralama"
                : "Сортировать по"}
            </option>
            <option value="name">
              {language === "en" ? "Name" : language === "az" ? "Ad" : "Имя"}
            </option>
            <option value="date">
              {language === "en"
                ? "Added Date"
                : language === "az"
                ? "Əlavə Edilən Tarix"
                : "Дата добавления"}
            </option>
            <option value="all">
              {language === "en"
                ? "Show All Hospitals"
                : language === "az"
                ? "Bütün Xəstəxanaları Göstər"
                : "Показать все больницы"}
            </option>
          </select>
        </div>

        <div className={styles.cardContainer}>
          {cards.map(
            (card) =>
              card.visible && (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <span className={styles.initial}>A</span>
                      <div>
                        <div className={styles.hospitalName}>{card.name}</div>
                        <div className={styles.address}>{card.adress}</div>
                      </div>
                    </div>
                    <div
                      className={styles.options}
                      onClick={() => toggleMenu(card.id)}
                    >
                      ⋮
                    </div>
                    {activeMenu === card.id && (
                      <div className={styles.dropdownMenu}>
                        <button onClick={() => hideCard(card.id)}>
                          {language === "en"
                            ? "Hide this hospital"
                            : language === "az"
                            ? "Bu xəstəxanayı gizlət"
                            : "Скрыть эту больницу"}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.datetime}>{card.dateTime}</div>
                    <div className={styles.doctorName}>
                      {card.doctorName[language]}
                    </div>
                    <div className={styles.profession}>
                      {card.profession[language]}
                    </div>
                    <p className={styles.description}>{card.about[language]}</p>
                  </div>
                  <button
                    className={styles.prescriptionButton}
                    onClick={() => openModal(card)}
                  >
                    {language === "en"
                      ? "Tap to See Prescription"
                      : language === "az"
                      ? "Təfsilatları Görmək Üçün Basın"
                      : "Нажмите, чтобы увидеть рецепт"}
                  </button>
                </div>
              )
          )}
        </div>

        {isModalOpen && selectedCard && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <h3>
                {language === "en"
                  ? "Prescription Details"
                  : language === "az"
                  ? "Reçetə Detalları"
                  : "Детали Рецепта"}
              </h3>
              <table className={styles.prescriptionTable}>
                <thead>
                  <tr>
                    <th>
                      {language === "en"
                        ? "Medicine"
                        : language === "az"
                        ? "Dərman"
                        : "Лекарство"}
                    </th>
                    <th>
                      {language === "en"
                        ? "Usage"
                        : language === "az"
                        ? "İstifadə"
                        : "Использование"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCard.prescription.map((med, index) => (
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
      </main>
    </div>
  );
};

export default VisitedHospitals;
