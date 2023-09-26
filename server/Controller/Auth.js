let generatedOTP = "";

export const generateOTP = (otp_length) => {
  var digits = "0123456789";
  let otp = "";
  for (let i = 0; i < otp_length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

export const verifyMobileNumber = async (req, res) => {
  generatedOTP = generateOTP(4);
  try {
    res.status(200).json({ OTP: generatedOTP });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const verifyOTP = async (req, res) => {
  const { OTP } = req.body;
  console.log(generatedOTP);
  try {
    if (OTP === generatedOTP) {
      return res.status(200).json({ message: "Login Successful" });
    }
    return res.status(401).json({ message: "Login Unsuccessful" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
