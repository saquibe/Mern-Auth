import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRotes from "./routes/user.route.js";
import authRotes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRotes);
app.use("/api/auth", authRotes);
app.use(cookieParser());

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
