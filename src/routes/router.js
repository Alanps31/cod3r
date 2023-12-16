import express  from "express";
import { creatUser } from "../controller/creat_user.js";

const router = express.Router()

router.get("/", (req,res) => {
    res.send(creatUser())
})

 router.get("/about", (req,res) => {
    res.send("outro tess3te")
}) 

export default router