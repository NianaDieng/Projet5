//connection a la db
const dbConfig=require("../config/db.config")
const Sequelize=require("sequelize")
const { dialect } = require("../config/db.config")


const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    port:dbConfig.PORT,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min
    
    }

})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
//recuperation des articles
db.articles=require("./article")(sequelize,Sequelize)
module.exports=db