
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <section className="hero">
        <h1>Donate Blood. Save Lives.</h1>
        <p>
          Connect blood donors with people in need.
          Every drop counts.
        </p>
      </section>

      <section className="login-section">
        <h2>Choose Your Login</h2>

        <div className="login-cards">

          <div className="login-card">
            <h3>👤 User Login</h3>
            <p>Find blood donors and manage requests.</p>
            <button onClick={() => navigate("/user/login")}>
              Continue
            </button>
          </div>

          <div className="login-card">
            <h3>❤️ Donor Login</h3>
            <p>Help others by donating blood.</p>
            <button onClick={() => navigate("/donor/login")}>
              Continue
            </button>
          </div>

        </div>
      </section>


    </div>
  );
}
export default LandingPage;
