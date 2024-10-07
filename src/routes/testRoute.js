import {Router} from "express"
import test from "../controller/test/test"

const testRoute = new Router()

testRoute.get("/api/test", test)

export default testRoute