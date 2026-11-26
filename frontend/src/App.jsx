import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import UserAuth from "./pages/user/UserAuth";
import DonorAuth from "./pages/donor/DonorAuth";
import DonorDashboard from "./pages/donor/DonorDashboard";
import UserDashboard from "./pages/user/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/user/login" element={<UserAuth />} />
        <Route path="/donor/login" element={<DonorAuth />} />
        <Route path="/donor/DonorDashboard" element={<DonorDashboard />} />
        <Route path="/user/UserDashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;