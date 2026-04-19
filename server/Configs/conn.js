import mongoose from "mongoose"

export const connectiondDb = async () => {
    const uri = process.env.MONGO_URI_WITHOUTSRRV
    await mongoose.connect(uri).then(()=>console.log("server connected to the db")).catch((err)=>{
        console.log(err)
    })
}