import {request, response} from "express"
import db from "../../conn"
const getUserByAuth = async (req = request, res = response)=>{
    const userId = req.userId
    try {
        const response = await db.pengguna.findUnique({
            where : {
                id : userId
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}


export default getUserByAuth