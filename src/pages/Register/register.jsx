import React from "react";
import styles from "../Register/register.module.css";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../Context/languageContext";
import LanguageButton from "../../components/language button/languageButton";

const Register = () => {
  const { language } = useLanguage();
  const languageText = {
    en: {
      title: "Sign Up",
      fullName: "Full Name",
      dob: "Date of Birth",
      gender: "Gender",
      genderSelect: "Select Gender",
      female: "Female",
      male: "Male",
      other: "Prefer Not to Say",
      id: "National ID / Passport Number",
      phone: "Phone Number",
      email: "Email",
      address: "Residential Address",
      register: "Register",
      alreadyAccount: "Already have an account? ",
      signIn: "Sign in",
    },
    az: {
      title: "Qeydiyyatdan Keç",
      fullName: "Ad Soyad",
      dob: "Doğum Tarixi",
      gender: "Cinsiyyət",
      genderSelect: "Cinsiyyəti Seçin",
      female: "Qadın",
      male: "Kişi",
      other: "Demək İstəmədim",
      id: "Şəxsiyyət vəsiqəsi / Pasport Nömrəsi",
      phone: "Telefon Nömrəsi",
      email: "E-poçt",
      address: "Yaşayış Ünvanı",
      register: "Qeydiyyat",
      alreadyAccount: "Hesabınız var? ",
      signIn: "Daxil ol",
    },
    rus: {
      title: "Регистрация",
      fullName: "Полное имя",
      dob: "Дата Рождения",
      gender: "Пол",
      genderSelect: "Выберите Пол",
      female: "Женский",
      male: "Мужской",
      other: "Предпочитаю не говорить",
      id: "Национальный ID / Номер Паспорта",
      phone: "Номер Телефона",
      email: "Электронная почта",
      address: "Домашний Адрес",
      register: "Регистрация",
      alreadyAccount: "Уже есть аккаунт? ",
      signIn: "Войти",
    },
  };

  return (
    <div className={styles.registerPage}>
      <LanguageButton /> {/* Add the language button at the top */}
      <h2 className={styles.title}>{languageText[language].title}</h2>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>{languageText[language].fullName}</label>
          <input type="text" placeholder={languageText[language].fullName} />
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].dob}</label>
          <input type="date" />
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].gender}</label>
          <select>
            <option value="">{languageText[language].genderSelect}</option>
            <option value="female">{languageText[language].female}</option>
            <option value="male">{languageText[language].male}</option>
            <option value="other">{languageText[language].other}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].id}</label>
          <input type="text" placeholder={languageText[language].id} />
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].phone}</label>
          <input type="tel" placeholder={languageText[language].phone} />
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].email}</label>
          <input type="email" placeholder={languageText[language].email} />
        </div>

        <div className={styles.formGroup}>
          <label>{languageText[language].address}</label>
          <textarea placeholder={languageText[language].address} rows="3"></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          {languageText[language].register}
        </button>

        <p className={styles.footerText}>
          {languageText[language].alreadyAccount}
          <NavLink to="/login">{languageText[language].signIn}</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
