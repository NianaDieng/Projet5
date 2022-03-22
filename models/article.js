//definir la structure de la table
module.exports=function(sequelize,Sequelize){
    const Article =sequelize.define('articles',{
id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,},
title:{type:Sequelize.STRING,},
author:{type:Sequelize.STRING,},
resume:{type:Sequelize.STRING,},
photo:{type:Sequelize.BLOB,},
    })
    return Article
}