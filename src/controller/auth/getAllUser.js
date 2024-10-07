import db from "../../conn"

const getAllUser = async (req, res)=>{
try {
    const response = await db.pengguna.findMany()

    res.json(response)
} catch (error) {
    console.log(error)
    res.json(error)
}
}

export default getAllUser