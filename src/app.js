import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express()


app.use(cors(
   {
    origin:process.origin.CORS_ORIGIN,
    Credential:true
   }
))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())