import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config()

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//app.use(express.json({limit:"16kb"}))
app.use(express.json())
//with this i do not need to use body-parse

//app.use(express.urlencoded({extended: true, limit: "16kb"}))
//this is used so that express will know some url which has differnt symbols like + %
//extended is used so that nested objects can be given
app.use(express.urlencoded())
//app.use(express.static("public"))
app.use(cookieParser)
//this is used to control browser secure cookie from server

export { app };
