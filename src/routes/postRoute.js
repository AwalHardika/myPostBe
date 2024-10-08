import {Router} from "express"
import autentikasi from "../middleware/autentikasi"
import createPost from "../controller/post/createPost"
import getAllPost from "../controller/post/getAllPost"
import getPostByAuth from "../controller/post/getPostByAuth"

const postRoute = new Router()

postRoute.post("/api/post/create", autentikasi, createPost)
postRoute.get("/api/post/all", getAllPost)
postRoute.get("/api/mypost", autentikasi, getPostByAuth)


export default postRoute

