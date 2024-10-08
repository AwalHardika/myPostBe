import db from "../../conn"

const getAllPost = async (req, res)=>{
try {
    const response = await db.post.findMany()

    res.json(response)
} catch (error) {
    console.log(error)
    res.json(error)
}
}

export default getAllPost