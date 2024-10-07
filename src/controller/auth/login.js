import jwt from "jsonwebtoken"
import db from "../../conn"
import bycript from "bcryptjs"


const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        const emailCase = email.toLowerCase()
        const getUser = await db.pengguna.findUnique({
            where : {
                email : emailCase
            }
        })

        if(!getUser){
            return res.status(404).json({message : "Email tidak ditemukan"})
        }
        const getPassword = await bycript.compare(password, getUser.password)

        if(!getPassword){
            return res.status(500).json({message : "Password tidak tepat atau salah"})
        }

        const token = jwt.sign({userId : getUser.id}, process.env.JWT_SECRET_KEY, {
            expiresIn : "3d"
        } ) 

        res.json({token})

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

export default Login