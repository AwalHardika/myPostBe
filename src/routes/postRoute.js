import {Router} from "express"
import autentikasi from "../middleware/autentikasi"
import createPost from "../controller/post/createPost"

const postRoute = new Router()

postRoute.post("/api/post/create", autentikasi, createPost)


export default postRoute

