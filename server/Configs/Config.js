import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { createSuperAdmin } from "../Controllers/seed.controller.js";
import { connectiondDb } from "./conn.js";
import { userModel } from "../Models/user.model.js";
import { userRoute } from "../Routes/user.route.js";

export const configApp = async(app) => {
    dotenv.config()
    app.use(express.json());
    app.use(cors())
    app.use(cookieParser())
    app.use("/api/user",userRoute);
    connectiondDb();
    app.listen(process.env.PORT,()=>{
    console.log("server is running on http://localhost:"+process.env.PORT)
});

const isExist = await userModel.findOne({role:"admin"})
    if(!isExist){
        await createSuperAdmin()
    }
}