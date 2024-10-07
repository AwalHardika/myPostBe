const test = async (req, res)=>{
try {
    res.json({
        message : "Berhasil test"
    })
} catch (error) {
    res.json(error)
}

}

export default test