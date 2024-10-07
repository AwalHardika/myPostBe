import jwt from "jsonwebtoken"
const autentikasi = (req, res, next)=>{
    const token = req.headers['autentikasi']
    
        if(!token){
            res.status(400).json({message : "no token provided"})
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded)=>{
            if(error) {
                res.status(401).json({message : "Invalid Token"})
            }

            req.userId = decoded.userId
            next()
        })

  
}


export default autentikasi