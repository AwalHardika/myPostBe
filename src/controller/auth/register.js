import bycript from "bcryptjs"
import db from "../../conn"

const register = async (req, res) => {
    const { nama, email, password } = req.body
    try {
        const hashPassword = await bycript.hash(password, 10)
        const emailCase = email.toLowerCase()

        const response = await db.pengguna.create({
            data: {
                nama,
                email: emailCase,
                password: hashPassword
            }
        })
        res.json(response)
    } catch (error) {
        res.json({ message: "Email already exist or error occured" })
        console.log(error)
    }
}

export default register