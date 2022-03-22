//recuperer les donnes
const req = require("express/lib/request")
const res = require("express/lib/response")
const db=require("../models")
const Article=db.articles
//fonction pour recuperer les articles
function getAllArticles(req,res){
Article.findAll()
.then(function(data){
    res.render('articles',{title:'Les articles',articles:data})
})
.catch(function(err){
    res.status(500).send({message:err.message})
})
}

//funtion pour recuperer les articles
function createArticle(req,res){
    if(!req.body.title ||!req.body.author || !req.body.resume ||!req.body.image || !req.body.file ){
        res.status(400).send('vous devez remplir les donnes')
    }
    const article={title:req.body.title,
        author:req.body.author, 
        resume:req.body.resume,
        image:req.body.image,
        file:req.body.file,
    }
    Article.create(article)
    .then(function(data){
        res.redirect('/articles')
    })
    .catch(function(err){
        res.status(500).send({message:err.message})
    })
}
//funtion pour afficher les details d'un articles
function getArticleDetails(req,res){
    const id=req.params.id
    Article.findByPK(id)
    .then(function(data){
        res.render("article",{title:data.title,article:data})
    })
    .catch(function(err){
        res.status(500).send({message:err.message})
    })
}

module.exports={getAllArticles,createArticle,getArticleDetails}