import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../Context/themeContext";
import { useLanguage } from "../../Context/languageContext";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../User Profile/userProfile.module.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { userProfileData } from "../../data";

const UserProfile = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useLanguage();
  const rectFill = darkMode ? "#3a3a3a" : "#1D1B20";

  const user = userProfileData[language];

  useEffect(() => {
    document.title =
      language === "en"
        ? "User Profile"
        : language === "az"
        ? "İstifa dəçi Profili"
        : "Профиль пользователя";
  }, [language]);

  const HospitalCard = ({ hospitalLetter, hospitalName, doctorName, dateTime }) => (
    <div className={styles.singleHospital}>
      <span className={styles.initial}>{hospitalLetter}</span>
      <div className={styles.hospitalNameInfo}>
        <p className={styles.hospitalName}>{hospitalName}</p>
        <p className={styles.hospitalDetail}>{doctorName}</p>
        <p className={styles.hospitalDetail}>{dateTime}</p>
      </div>
    </div>
  );

  return (
    <div className={`${styles.userProfile} ${darkMode ? styles.dark : ""}`}>
      <Header />
      <Sidebar />
      <div className={styles.onlyUserPage}>
        <div className={styles.pageContent}>
          <div className={styles.leftContent}>
            <div className={styles.userInfo}>
              <p className={styles.userName}>{user.name}</p>
              <div className={styles.userMeasures}>
                <div>
                  <p>{`${user.ageLabel} ${user.age}`}</p>
                  <p>{`${user.sexLabel} ${user.gender}`}</p>
                </div>
                <div>
                  <p>{`${user.weightLabel} ${user.weight}`}</p>
                  <p>{`${user.heightLabel} ${user.height}`}</p>
                </div>
              </div>
            </div>

            <div className={styles.comments}>
              <input
                type="text"
                placeholder="Type here"
                className={styles.commentSection}
              />
              <div className={styles.doctorComments}>
                <span>Comments from doctors</span>
                <input
                  type="text"
                  placeholder="Doctor comments"
                  className={styles.commentSection}
                />
              </div>
            </div>

            <div className={styles.upcomingVisits}>
              <p>
                {language === "en"
                  ? "Upcoming visits"
                  : language === "az"
                  ? "Yaxın Ziyarətlər"
                  : "Предстоящие визиты"}
              </p>
              <div className={styles.hospitals}>
                {user.upcomingVisits.map((visit, index) => (
                  <HospitalCard
                    key={index}
                    hospitalLetter={visit.hospitalLetter}
                    hospitalName={visit.hospital}
                    doctorName={visit.doctor}
                    dateTime={visit.dateTime}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.calendar}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                defaultValue={dayjs()}
                sx={{
                  backgroundColor: "#E5DCEE",
                  borderRadius: "8px",
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
