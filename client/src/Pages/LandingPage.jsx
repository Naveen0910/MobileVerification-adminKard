import React from "react";
import artboard from "../Data/Artboard 1.png";
import "./LandingPage.css"; // Import your CSS file for styles

const LandingPage = () => {
  return (
    <div
      className="responsive-container"
      style={{
        fontFamily: "work sans",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "100%",
        Height: "80vh",
      }}
    >
      <div className="responsive-content">
        <img src={artboard} alt="Artboard" className="responsive-image" />
        <div className="responsive-text">
          <h1
            style={{ fontWeight: "600", fontSize: "24px", textAlign: "center" }}
          >
            Welcome to AdmitKard
          </h1>
          <p
            style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
          >
            In order to provide you with a custom experience,{" "}
            <span style={{ fontWeight: "600" }}>
              we need to ask you a few questions.
            </span>
          </p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#F7B348",
                color: "white",
                borderRadius: "20px",
                border: "none",
              }}
            >
              Get Started
            </button>
            <p style={{ fontSize: "12px", color: "#999999", marginTop: "5px" }}>
              *This will only take 5 min.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
