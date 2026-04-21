import { GenerateToken } from "../Configs/Helper.js"
import { userModel } from "../Models/user.model.js"
import bcrypt from 'bcryptjs'

export const createSuperAdmin = async (req,res) => {
    try {
        const isExist = await userModel.findOne({role:"admin"})

        if(isExist){
            return res.status(400).json({success:false,message:"admin is already exist"})
        }

        const hashed = await bcrypt.hash(process.env.hashedAdminPassword,10)

        const newAdmin = new userModel({
            name:"admin",
            email:"admin@gmail.com",
            password:hashed,
            role:"admin"
        });

        await newAdmin.save();

        res.cookie("accessToken",GenerateToken(newAdmin._id,newAdmin.role)).status(201).json({success:true,message:"Admin created"});

    } catch (error) {
        
    }
} 