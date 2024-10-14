import { request, response } from "express"
import db from "../../conn"


const deletePost = async (req = request, res = response) => {
    const { id } = req.params
    const parseId = parseInt(id)
    const userId = req.userId

    try {
        const getPost = await db.post.findUnique({
            where : {
                id : parseId
            }
        })
        if(getPost.userId !== userId){
            return res.status(400).json({
                message : "Anda tidak berhak untuk menghapus postingan ini"
            })
        }
        const deletePost = await db.post.delete({
            where :{
                id : parseId
            }
        })
        res.status(200).json({
            message : "berhasil delete data",
            deletePost
        })
    } catch (error) {
        console.log(error)
        res.json(error)
    }

}

export {
    deletePost
}
