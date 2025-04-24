import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './Context/languageContext.jsx'; // Import the LanguageProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider> {/* Wrap the App component with LanguageProvider */}
      <App />
    </LanguageProvider>
  </StrictMode>,
);
