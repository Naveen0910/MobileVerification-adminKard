import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./Routes/Auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port : ${process.env.PORT}`);
});
