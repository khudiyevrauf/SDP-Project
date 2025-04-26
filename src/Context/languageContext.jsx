import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    welcome: "Welcome to E-Saglamliq",
    description:
      "E-Saglamliq is your centralized e-health portal providing seamless access to your medical records, hospital visits, prescriptions, tests, and doctor communications—all in one place. Our mission is to simplify and secure your healthcare experience.",
    continueLogin: "Continue Log In",
    frontendTeam: "Frontend Team",
    backendTeam: "Backend Team",
    externalInstructor: "External Instructor",
    frontendDeveloper: "Frontend Developer",
    backendDeveloper: "Backend Developer",
    api: "API",
    design: "Design",
    guides: "Guides",
  },
  az: {
    welcome: "E-Saglamlığa xoş gəlmisiniz",
    description:
      "E-Saglamlıq sizin mərkəzləşdirilmiş e-sağlamlıq portalınızdır, tibbi qeydlərinizə, xəstəxana ziyarətlərinizə, reseptlərə, testlərə və həkimlərlə ünsiyyətə rahatlıqla daxil olmağınızı təmin edir. Bizim missiyamız səhiyyə təcrübənizi sadələşdirmək və təhlükəsiz etməkdir.",
    continueLogin: "Daxil olmağa davam et",
    frontendTeam: "Frontend Komandası",
    backendTeam: "Backend Komandası",
    externalInstructor: "Xarici Müəllim",
    frontendDeveloper: "Frontend Developer",
    backendDeveloper: "Backend Developer",
    api: "API",
    design: "Dizayn",
    guides: "Bələdçilər",
  },
  rus: {
    welcome: "Добро пожаловать в E-Saglamliq",
    description:
      "E-Saglamliq — это ваш централизованный портал для электронной медицины, который предоставляет бесперебойный доступ к вашей медицинской карте, визитам в больницу, рецептам, анализам и коммуникациям с врачами — все в одном месте. Наша миссия — упростить и обеспечить безопасность вашего медицинского опыта.",
    continueLogin: "Продолжить вход",
    frontendTeam: "Frontend Команда",
    backendTeam: "Backend Команда",
    externalInstructor: "Внешний преподаватель",
    frontendDeveloper: "Frontend Developer",
    backendDeveloper: "Backend Developer",
    api: "API",
    design: "Дизайн",
    guides: "Руководства",
  },
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "en";
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    document.title = translations[language].welcome;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
