import React, { useState } from "react";
import styles from "../Login/login.module.css";
import sima from "../../assets/sima.png";
import bsxm from "../../assets/bsxm.png";
import asan from "../../assets/asan.png";
import token from "../../assets/token.png";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (id.length < 6 || password.length < 6) {
      setError("Both fields must be at least 6 characters long.");
    } else {
      setError("");
      navigate("/user-profile");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginSection}>
        <NavLink to="/" className={styles.homeBtn}>
          <svg
            className={styles.homeIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#6A5ACD"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.8542 11.897L12.0289 3.04285L3.14703 11.8958C2.95145 12.0908 2.95092 12.4074 3.14587 12.603C3.34081 12.7985 3.65739 12.7991 3.85297 12.6041L5.5 10.9625V20.4999C5.5 20.7761 5.72385 20.9999 6 20.9999H9.5C9.77615 20.9999 10 20.7761 10 20.4999V16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20.4999C14 20.7761 14.2239 20.9999 14.5 20.9999H18C18.2761 20.9999 18.5 20.7761 18.5 20.4999V10.9517L20.1458 12.603C20.3408 12.7985 20.6574 12.7991 20.8529 12.6041C21.0485 12.4092 21.0491 12.0926 20.8542 11.897Z" />
          </svg>
          Home
        </NavLink>

        <h2>Log In</h2>

        <form onSubmit={handleLogin} className={styles.form}>
          <label htmlFor="id">Identification number</label>
          <input
            type="text"
            id="id"
            placeholder="Identification number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit" className={styles.signInBtn}>
            <p>Sign In</p>
          </button>
        </form>

        <button className={styles.digitalBtn}>
          <img
            src="https://digital.login.gov.az/assets/images/digital_login_logo.svg"
            alt="digital login"
          />
          Sign in with Digital Login
        </button>

        <div className={styles.signup}>
          Don’t have an account? <NavLink to="/sign-up">Sign up</NavLink>
        </div>
      </div>

      <div className={styles.digitalSection}>
        <img
          src="https://digital.login.gov.az/assets/images/digital_login_logo.svg"
          alt="digital login"
          className={styles.digitalLogo}
        />

        <div className={styles.buttonGrid}>
          <div className={`${styles.digitalOption} ${styles.raqamsal}`}>
            <img src={sima} alt="sima" />
            <p>SİMA Rəqəmsal İmza</p>
          </div>
          <div className={`${styles.digitalOption} ${styles.asan}`}>
            <img src={asan} alt="asan" />
            <p>Asan İmza</p>
          </div>
          <div className={`${styles.digitalOption} ${styles.token}`}>
            <img src={token} alt="token" />
            <p>SİMA Token (Elektron İmza)</p>
          </div>
          <div className={`${styles.digitalOption} ${styles.bsxm}`}>
            <img src={bsxm} alt="bsxm" />
            <p>BSXM Elektron İmza</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
