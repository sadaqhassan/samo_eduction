import { useReducer } from "react"
import { GenerateToken } from "../Configs/Helper.js"
import { userModel } from "../Models/user.model.js"
import bcrypt from 'bcryptjs'

//register
export const LoginApi = async(req,res)=>{
    const {email,password} = req.body
    
    try {
        if(!email || !password) {
            return res.status(400).json({success:false,message:"Please fill all inputs"})
        }

        const user = await userModel.findOne({email});
        
        if(!user){
            return res.status(401).json({success:false,message:"incorrect email or password"})
        }
        
        if(user.lockAccount){
            return res.status(403).json({success:false,message:"Please contact to admin center"})
        }

        const isCompare = await bcrypt.compare(password,user.password);

        if(!isCompare){
            user.totalAttempts = (user.totalAttempts||0)+1
            if(user.totalAttempts >=5){
            user.lockAccount = true
        }
        await user.save();

        return res.status(401).json({success:false,message:"incorrect email or password"})
        }

        user.totalAttempts = 0
        user.lockAccount = false

        await user.save()

        const token = GenerateToken(user._id,user.role);

        return res.status(200).cookie("accessToken",token,{httpOnly:true}).json({success:true,message:"Welcome back "+user.name})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false,message:"server error"})
    }
}

// createTeacher
export const createUserApi = async (req,res) => {
    const {role,name,email,password} = req.body
    const {role} = req.role

    if(role !== "admin")return res.status(401).json({success:false,message:"You can't create Teacher"})
    try {

        const teacher = userModel.findOne({email});

        if(teacher){
            return res.status(400).json({success:false,message:"this teacher is exist"})
        }

        const hashedPassword = await bcrypt.hash(hashedPassword,10)

        const newUser = await new userModel({
            name,
            email,
            password:hashedPassword,
            role
        });

        await user.save();

        return res.status(200).json({success:true,message:"Welcome back "+user.name});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false,message:"server error"})
    }
}