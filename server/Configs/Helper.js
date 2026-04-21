//generaToken
import jwt from 'jsonwebtoken'



export const GenerateToken = async (id,role) => {
    const token = await jwt.sign({id:id,role:role},process.env.JWT_SECRET,{expiresIn:"7d"});
    return token;
}