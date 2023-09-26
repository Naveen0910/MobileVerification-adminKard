import React, { createContext, useContext, useState, useEffect } from "react";

const OtpContext = createContext();

export function OtpProvider({ children }) {
  const [otp, setOtp] = useState(localStorage.getItem("otp") || "");
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber") || ""
  );

  useEffect(() => {
    localStorage.setItem("otp", otp);
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [otp, phoneNumber]);

  return (
    <OtpContext.Provider value={{ otp, setOtp, phoneNumber, setPhoneNumber }}>
      {children}
    </OtpContext.Provider>
  );
}

export function useOtp() {
  return useContext(OtpContext);
}
