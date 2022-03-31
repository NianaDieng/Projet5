const express=require("express")
const router=express.Router()

const article=require("../controllers/article")

router.get("/",article.getAllArticles)
router.post("/",article.createArticle)
router.get("/:id/details",article.getArticleDetails)
// router.get("/:id/update",article.getArticletoUpdate)
// router.get("/:id/update",article.getArticleUpdate)

module.exports=router