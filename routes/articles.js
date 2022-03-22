const express=require("express")
const router=express.Router()

const article=require("../controllers/article")

router.get("/",article.getAllArticles)
router.post("/",article.createArticle)
router.get("/:id/details",article.getAllArticles)


module.exports=router