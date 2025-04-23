import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import dayjs from "dayjs";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../Visited Hospitals/visitedHospitals.module.css";

const visitedHospitals = () => {
  const { darkMode } = useContext(ThemeContext);
  const [cards, setCards] = useState([
    { id: 1, name: "Hospital 1", visible: true },
    { id: 2, name: "Hospital 2", visible: true },
    { id: 3, name: "Hospital 3", visible: true },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sortOption, setSortOption] = useState("");

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
        <h2 className={styles.title}>Visited Hospitals</h2>

        <div className={styles.filterBar}>
          <div className={styles.filterBarDate}>
            <button className={styles.filterButton}>Last 30 days</button>
            <button className={styles.filterButton}>Last 6 months</button>
            <button className={styles.filterButton}>2024</button>
            <input
              type="date"
              className={styles.dateInput}
              defaultValue={dayjs().subtract(1, 'month').format('YYYY-MM-DD')}
            />
            <span className={styles.dateSeparator}>→</span>
            <input
              type="date"
              className={styles.dateInput}
              defaultValue={dayjs().format('YYYY-MM-DD')}
            />
          </div>

          <select
            className={styles.sortDropdown}
            onChange={handleSortChange}
            value={sortOption}
          >
            <option value="" disabled hidden>
              Sort By
            </option>
            <option value="name">Name</option>
            <option value="date">Added Date</option>
            <option value="all">Show All Hospitals</option>
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
                        <div className={styles.address}>Address</div>
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
                          Hide this hospital
                        </button>
                      </div>
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.datetime}>DATE/TIME</div>
                    <div className={styles.doctorName}>NAME OF THE DOCTOR</div>
                    <div className={styles.profession}>PROFESSION</div>
                    <p className={styles.description}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                  <button
                    className={styles.prescriptionButton}
                    onClick={() => openModal(card)}
                  >
                    TAP TO SEE PRESCRIPTION
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
      </main>
    </div>
  );
};

export default visitedHospitals;
