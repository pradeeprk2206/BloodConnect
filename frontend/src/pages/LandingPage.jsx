
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import bloodImage from "../assets/Bloodimage.png";


function LandingPage() {
  const navigate = useNavigate();

  return (
    
    <div className="landing-container">

      <section className="hero">
        <h1>
          Welcome to
          <br />
          <span className="blood">Blood</span>
          <span className="connect">Connect</span>
        </h1>
          <div className="hero-image">
             <img src={bloodImage} alt="Blood donation illustration" />
          </div>

        <p>Together we can save lives ❤️</p>
      </section>

      <section className="login-section">
        <h2>Choose Your Login</h2>

        <div className="login-cards">

          <div className="login-card">
            <h3>User Login</h3>
            <p>Find blood donors and manage requests.</p>

            <button onClick={() => navigate("/user/login")}>
              Continue
            </button>
          </div>

          <div className="login-card">
            <h3>Donor Login</h3>
            <p>Help others by donating blood.</p>
            <br></br>
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
