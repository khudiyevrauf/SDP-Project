import { HashRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./Context/themeContext";
import UserProfile from "./pages/User Profile/userProfile";
import VisitedHospitals from "./pages/Visited Hospitals/visitedHospitals";
import Diseases from "./pages/Diseases/diseases";
import Tests from "./pages/Tests/tests";
import Receipts from "./pages/Receipts/receipts";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import HomePage from "./pages/Home Page/homePage";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/visited-hospitals" element={<VisitedHospitals />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
