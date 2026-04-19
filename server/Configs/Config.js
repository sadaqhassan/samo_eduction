import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { connectiondDb } from './Configs/conn.js';

export const configApp = async (app) => {
    dotenv.config()
    app.use(express.json());
    app.use(cors())
    app.use(cookieParser())
    connectiondDb();
    app.listen(process.env.PORT,()=>{
    console.log("server is running on http://localhost:"+process.env.PORT)
});
}