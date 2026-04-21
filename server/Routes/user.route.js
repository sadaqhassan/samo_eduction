import { Router } from "express";
import { LoginApi } from "../Controllers/user.controller.js";

const user = Router();

user.post("/login",LoginApi);

export const userRoute = user;