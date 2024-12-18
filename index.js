import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectToDB } from "./config/db.js";
import logToFile from './middleware/logToFile.js'
import corsRouter from "./routers/cors.js";
import userRouter from "./routers/user.js";

dotenv.config()
connectToDB()
const app=express()
app.use(cors())
app.use(express.json())
app.use(logToFile)

app.use("/api/cors", corsRouter);
app.use("/api/user", userRouter);


const port = process.env.PORT
app.listen(port, "localhost", () => {
    console.log("app is listening on port " + port)
})