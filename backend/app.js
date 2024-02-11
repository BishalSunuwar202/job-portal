import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import jobsRouter from "./routes/jobs.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//app.use(express.json({limit:"16kb"}))
app.use(express.json());
app.use(express.static('public'))

//with this i do not need to use body-parse
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//this is used so that express will know some url which has differnt symbols like + %
//extended is used so that nested objects can be given
//app.use(express.urlencoded())
//app.use(express.static("public"))
app.use(cookieParser());
//this is used to control browser secure cookie from server

app.use("/api/jobs", jobsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
 
export { app };
