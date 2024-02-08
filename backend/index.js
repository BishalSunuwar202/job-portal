import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed");
  });
