import {Router} from "express"
import autentikasi from "../middleware/autentikasi"
import createPost from "../controller/post/createPost"
import getAllPost from "../controller/post/getAllPost"
import getPostByAuth from "../controller/post/getPostByAuth"
import { updatePost } from "../controller/post/updatePost"
import { deletePost } from "../controller/post/deletePost"

const postRoute = new Router()

postRoute.post("/api/post/create", autentikasi, createPost)
postRoute.get("/api/post/all", getAllPost)
postRoute.get("/api/mypost", autentikasi, getPostByAuth)
postRoute.put("/api/post/update/:id", autentikasi, updatePost)
postRoute.delete("/api/post/delete/:id", autentikasi, deletePost)


export default postRoute

