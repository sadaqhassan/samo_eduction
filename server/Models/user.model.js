import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin","teacher","student"]
    },
    lockAccount:{
        type:Boolean,
        default:false
    },
    totalAttempts:{
        type:Number,
        default:0
    }

},{timestamps:true});

export const userModel = mongoose.model("user",userSchema);