import db from "../../conn"

const getPostByAuth = async (req, res) => {
    const userId = req.userId
    // const {id} = req.params
    // paramsId = parseInt(id)
    try {
        const getPost = await db.post.findMany({
          where : {
            userId
          }
        })

        if(!getPost){
            return res.status(404).json({message : "Tidak postingan dalam akun anda"})
        }
        res.json(getPost)
    } catch (error) {

    }

}

export default getPostByAuth