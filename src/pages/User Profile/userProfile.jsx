import React, { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import styles from "../User Profile/userProfile.module.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const UserProfile = () => {
  const { darkMode } = useContext(ThemeContext);
  const rectFill = darkMode ? "#3a3a3a" : "#1D1B20";

  const HospitalCard = ({ hospitalName, doctorName, dateTime }) => (
    <div className={styles.singleHospital}>
      <svg
        className={styles.hospitalLogo}
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1112_14798)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.601685)"
            fill={rectFill}
            fillOpacity="0.12"
          />
          <path
            d="M18.0801 19.549V20.3156H14.2324V19.549H18.0801ZM14.3789 16.4923V23.6017H13.4365V16.4923H14.3789ZM18.9004 16.4923V23.6017H17.9629V16.4923H18.9004ZM26.5439 16.4923V23.6017H25.5967L22.0176 18.1183V23.6017H21.0752V16.4923H22.0176L25.6113 21.9904V16.4923H26.5439Z"
            fill="#1D1B20"
          />
        </g>
        <defs>
          <clipPath id="clip0_1112_14798">
            <rect
              y="0.601685"
              width="40"
              height="40"
              rx="20"
              fill={rectFill}
              fillOpacity="0.12"
            />
          </clipPath>
        </defs>
      </svg>
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
              <p className={styles.userName}>Welcome Rauf Khudiyev</p>
              <div className={styles.userMeasures}>
                <div>
                  <p>Age: 22</p>
                  <p>Gender: Male</p>
                </div>
                <div>
                  <p>Weight: 76kg</p>
                  <p>Height: 182cm</p>
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
                  placeholder="Doctor Comments"
                  className={styles.commentSection}
                />
              </div>
            </div>

            <div className={styles.upcomingVisits}>
              <p>Upcoming visits</p>
              <div className={styles.hospitals}>
                <HospitalCard
                  hospitalName="Ege Hospital"
                  doctorName="Huseyn Aliyev, Dentistry"
                  dateTime="19 january, 08:00"
                />
                <HospitalCard
                  hospitalName="Referance Hospital"
                  doctorName="Arif Orucov , Ophthalmology "
                  dateTime="3 february, 13:00"
                />
                <HospitalCard
                  hospitalName="Baku Medical Plaza"
                  doctorName="Telman Yusifov , Dermatology"
                  dateTime="15 february, 14:00"
                />
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
