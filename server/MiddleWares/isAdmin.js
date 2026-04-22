import jwt from "jsonwebtoken"

export const isAdmin = (req,res,next) => {
    const token = req.cookies?.accessToken
    

    if(!token) return res.status(403).json({success:false,message:"you are not authed"})

    const verifytoken =  jwt.verify(token,process.env.JWT_SECRET);

    if(verifytoken.role !== "admin"){
        return res.status(403).json({success:false,message:"you are not admin"})
    }

    req.userRole = verifytoken.role,
    req.userId = verifytoken.id

    next()
}