import express from "express"
import cors from "cors"
import env from "dotenv"
import testRoute from "./routes/testRoute"
import authRoute from "./routes/authRoute"
import postRoute from "./routes/postRoute"


const app = express()
env.config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json({
    limit : "100mb"
}))
app.use(express.urlencoded({
    extended : "true"
}))

app.use(testRoute)
app.use(authRoute)
app.use(postRoute)


app.listen(PORT, ()=>{
    console.info(`
    ==========================
    Server berjalan di http://localhost:${PORT}
    ==========================
    `)
})
