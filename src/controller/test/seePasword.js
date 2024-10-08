import db from "../../conn"

const {id} = req.params
const parseId = parseInt(id)
const seePassword = async (req, res)=>{
const getAkun = await db.pengguna.findUnique({
    where : {
        id : parseId
    }
})

const password = getAkun.password
res.json(password)
}

export default seePassword