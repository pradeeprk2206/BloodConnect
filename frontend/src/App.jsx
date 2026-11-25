import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import UserAuth from "./pages/user/UserAuth";
import DonorAuth from "./pages/donor/DonorAuth";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/login" element={<UserAuth />} />
      <Route path="/donor/login" element={<DonorAuth />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
