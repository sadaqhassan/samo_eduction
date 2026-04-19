import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin","teacher"]
    },
    lockAccount:{
        type:Boolean,
        default:false
    },
    unlockAccount:{
        type:Date,
        default:undefined
    }
},{timestamps:true});

export const userModel = mongoose.model("user",userSchema);