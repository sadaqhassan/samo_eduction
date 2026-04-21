import { GenerateToken } from "../Configs/Helper.js"
import { userModel } from "../Models/user.model.js"
import bcrypt from 'bcryptjs'

export const createSuperAdmin = async () => {

    try {
        const isExist = await userModel.findOne({role:"admin"})

        if(isExist){
            console.log({success:false,message:"admin is already exist"})
        }

        const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD,10)

        const newAdmin = new userModel({
            name:"admin",
            email:"admin@gmail.com",
            password:hashed,
            role:"admin"
        });

        await newAdmin.save();

        } catch (error) {
        console.log(error)
    }
} 