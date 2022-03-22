const express=require("express")
const router=express.Router()

const article=require("../controllers/article")

router.get("/",article.getAllArticles)
module.exports=router