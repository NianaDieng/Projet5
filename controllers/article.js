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
    if(!req.body.title ||!req.body.author || !req.body.resume || !req.body.contenu){
        res.status(400).send('vous devez remplir les donnes')
    }
    const article={title:req.body.title,
        author:req.body.author, 
        resume:req.body.resume,
        contenu:req.body.contenu,
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

// function deleteArticle(req,res){
//     const id=req.params.id
//     Article.destroy({
//         where:{id: id}
//     }).then(function(data){
//         if(data==1){
//             //livre supprimer
//             res.redirect('/articles')
//         }else{
//             res.send({message:'article non supprimé'})
//         }
//     }).catch(function(err){
//         res.status(500).send({message:err.message})
//     })
// }

//funtion pour modifier un articles
// function getArticletoUpdate(req,res){
//     const id=req.params.id
//     Article.findByPK(id)
//     .then(function(data){
//         res.render("update",{title:data.title,article:data})
//     })
//     .catch(function(err){
//         res.status(500).send({message:err.message})
//     })
// }
//
// function updateBook(res,req){
//     const id=req.params.id
//     Article.update(req.body,{
//         where:{id: id}
//     }).then(function(data){
//         if(data==1){
            
//             res.redirect('/articles')
//         }else{
//             res.send({message:'article non update'})
//         }
//     }).catch(function(err){
//         res.status(500).send({message:err.message})
//     })
// }

module.exports={getAllArticles,createArticle,getArticleDetails,}