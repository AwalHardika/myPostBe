import {Router} from "express"
import register from "../controller/auth/register"
import Login from "../controller/auth/login"
import getAllUser from "../controller/auth/getAllUser"
import autentikasi from "../middleware/autentikasi"
import getUserByAuth from "../controller/auth/getUserByAuth"

const authRoute = new Router()

authRoute.post("/api/register", register)
authRoute.post("/api/login", Login)
authRoute.get('/api/users', getAllUser)
authRoute.get("/api/user", autentikasi, getUserByAuth )

export default authRoute
