import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Snackbar } from "@mui/material";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import logo from "../Data/AK_logo.png";
import { BASE_URL } from "../constants";
import OtpVerification from "./OTPVerification";
import { useNavigate } from "react-router-dom";
import { useOtp } from "../Context/context";

const PhoneNumberInput = (props) => {
  const navigate = useNavigate();
  const { setOtp, setPhoneNumber } = useOtp();
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("in");
  const [error, setError] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCountryChange = (value, country) => {
    setCountry(country.short);
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber.replace(/[^0-9]/g, "").length < 12) {
      setPhoneNumberError("Phone number must have at least 10 digits.");
    } else {
      setPhoneNumberError("");
      setError(false);
    }
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setValue(phoneNumber);
    validatePhoneNumber(phoneNumber);
    setPhoneNumber(value);
  };

  const verifyNumber = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/verifyNumber`, {
        mobileNumber: value,
      });
      const { OTP } = response.data;
      if (OTP) {
        setOtp(OTP);
        navigate("/verifyOTP");
      }
    } catch (error) {
      console.error("Error fetching OTP:", error);
    }
  };
  const invalidNumber = () => {
    setPhoneNumberError("Phone number must have at least 10 digits.");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="AK Logo"
        style={{ marginTop: "20vh", marginBottom: "10vh" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "400",
            fontFamily: "Work Sans",
            lineHeight: "28px",
            margin: "0px",
          }}
        >
          Welcome Back
        </h1>
        <p
          style={{
            fontSize: "14px",
            margin: "10px 0px 20px 0px",
            fontFamily: "Work Sans",
            lineHeight: "19px",
            color: "#666666",
          }}
        >
          Please sign in to your account
        </p>
      </div>
      <div>
        <PhoneInput
          country={country}
          value={value}
          onChange={handlePhoneNumberChange}
          onBlur={() => {}}
          inputProps={{
            name: "phone",
            required: true,
            placeholder: "Enter Mobile Number",
          }}
          countryCodeEditable={false}
          containerClass="phone-input-container"
          inputClass="phone-input"
          buttonStyle={{
            backgroundColor: "transparent",
          }}
          enableSearch
          inputButtonClass="phone-input-button"
          autoFormat={true}
          onSelect={handleCountryChange}
        />
        {phoneNumberError && (
          <p style={{ color: "red", fontSize: "16px" }}>{phoneNumberError}</p>
        )}
      </div>
      <div style={{ marginBottom: "50px", marginTop: "20px" }}>
        <p style={{ fontSize: "12px" }}>
          We will send you a one-time SMS message. Charges may apply.
        </p>
      </div>
      <div>
        <button
          onClick={!error ? verifyNumber : invalidNumber}
          style={{
            fontSize: "16px",
            backgroundColor: "#F7B348",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            height: "36px",
            padding: "0px 20px 0px 20px",
          }}
        >
          Sign in with OTP
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
