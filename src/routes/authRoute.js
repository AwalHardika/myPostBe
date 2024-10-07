import {Router} from "express"
import register from "../controller/auth/register"
import Login from "../controller/auth/login"
import getAllUser from "../controller/auth/getAllUser"

const authRoute = new Router()

authRoute.post("/api/register", register)
authRoute.post("/api/login", Login)
authRoute.get('/api/users', getAllUser)

export default authRoute
