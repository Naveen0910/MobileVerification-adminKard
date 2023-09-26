import express from "express";

import { verifyMobileNumber, verifyOTP } from "../Controller/Auth.js";

const router = express.Router();

router.post("/verifyNumber", verifyMobileNumber);
router.post("/verifyotp", verifyOTP);

export default router;
