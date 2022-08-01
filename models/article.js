module.exports=function(sequelize,Sequelize){

    return sequelize.define('articles',{
            id: {
                type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,
            },
            title: {
                type:Sequelize.STRING,
            },
            author: {
                type:Sequelize.STRING,
            },
            resume: {
                type:Sequelize.STRING,
            },
            contenu: {
                type:Sequelize.STRING,
            },
        }
    )
}