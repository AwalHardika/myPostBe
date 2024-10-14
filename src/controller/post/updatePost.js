import { request, response } from "express"
import db from "../../conn"


const updatePost = async (req = request, res = response) => {
    const { judul, body } = req.body
    const { id } = req.params
    const idPost = parseInt(id)
    const userId = req.userId
    try {
        const getPost = await db.post.findUnique({
            where: {
                id: idPost
            }
        })

        if (!getPost) {
            return res.status(404).json({ message: "Postingan tidak ditemukan" })
        }
        if (getPost.userId !== userId) {
            return res.status(400).json({
                message:
                    "Kamu dilarang edit postingan ini"
            })
        }
        const response = await db.post.update({
            where: {
                id: idPost,
            },
            data: {
                judul,
                body
            }
        })
        if (!response) {
            return res.status(400).json({ message: "Anda tidak boleh edit postingan ini" })
        }

        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

export {
    updatePost
}