import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Snackbar, Grid } from "@mui/material";
import handLogo from "../Data/handImage.png";
import { useOtp } from "../Context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

const OtpInput = () => {
  const { otp, phoneNumber, setOtp } = useOtp();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [incorrectOtp, setIncorrectOtp] = useState(false);
  useEffect(() => {
    if (otp) {
      setSnackbarOpen(true);
    }
  }, [otp]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const [OTP, setOTP] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...OTP];
      newOTP[index] = value;
      setOTP(newOTP);

      if (index < OTP.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = OTP.join("");
    try {
      const response = await axios.post(`${BASE_URL}/verifyotp`, {
        OTP: otpValue,
      });
      console.log(response.status);
      if (response.status === 200) {
        navigate("/landingpage");
      } else {
        setIncorrectOtp(true);
      }
    } catch {
      setIncorrectOtp(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const resendOtp = async () => {
    setIncorrectOtp(false);
    try {
      const response = await axios.post(`${BASE_URL}/verifyNumber`, {
        mobileNumber: phoneNumber,
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

  return (
    <div className="responsive-container">
      <img src={handLogo} alt="Hand Logo" className="responsive-image" />
      <div className="responsive-text">
        <p style={{ fontSize: "20px", fontFamily: "Work Sans" }}>
          Please verify Mobile number
        </p>
        <p
          style={{
            fontSize: "15px",
            fontFamily: "Work Sans",
            marginBottom: "5px",
          }}
        >
          An OTP is sent to +{phoneNumber}
        </p>
        <p
          onClick={() => navigate("/")}
          style={{
            color: "#F7B348",
            textDecoration: "underline",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          Change Mobile Number
        </p>
      </div>
      <div>
        <Grid
          style={{ marginTop: "20px", marginBottom: "30px" }}
          container
          spacing={2}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <Grid item key={index}>
              <TextField
                id={`otp-input-${index}`}
                variant="outlined"
                type="text"
                value={OTP[index]}
                onChange={(e) => handleOtpChange(e, index)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    width: "18px",
                    height: "18px",
                    border: "1px solid #d6d6d6",
                  },
                }}
                inputRef={(ref) => (inputRefs.current[index] = ref)}
              />
            </Grid>
          ))}
        </Grid>

        {otp && (
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message={`Received OTP: ${otp}`}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          />
        )}
        {
          <Snackbar
            open={incorrectOtp}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message={`Incorrect Otp`}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          />
        }
        <p style={{ color: "#999999" }}>
          Didn’t receive the code?
          <span
            onClick={resendOtp}
            style={{ color: "#F7B348", textDecoration: "underline" }}
          >
            resend?
          </span>
        </p>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerifyOtp}
            style={{
              width: "224px",
              height: "36px",
              backgroundColor: "#F7B348",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            Verify OTP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
