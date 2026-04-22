import { Router } from "express";
import { createUserApi, LoginApi } from "../Controllers/user.controller.js";
import { isAdmin } from "../MiddleWares/isAdmin.js";

const user = Router();

user.post("/login",LoginApi);
user.post("/register",isAdmin,createUserApi);

export const userRoute = user;

`// {
//     "email":"samo",
//     "name":"sadal",
//     "password":"samo123",
//     "role":"teacher"
// }
`
// {
//     "email" :"admin@gmail.com",
//     "password":"Samisnha123"
// }