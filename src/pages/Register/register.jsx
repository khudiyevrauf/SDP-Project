import React from "react";
import styles from "../Register/register.module.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.registerPage}>
      <h2 className={styles.title}>Sign Up</h2>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>

        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>
          <select>
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Prefer Not to Say</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>National ID / Passport Number</label>
          <input type="text" placeholder="ID or Passport Number" />
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="Email Address" />
        </div>

        <div className={styles.formGroup}>
          <label>Residential Address</label>
          <textarea placeholder="Enter your address..." rows="3"></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>

        <p className={styles.footerText}>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
