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

        return res.status(200).json({success:true,message:"Welcome back "+user.name})

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}