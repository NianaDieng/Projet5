// Configurations base de données

module.exports={
    HOST:'localhost',
    USER:'postgres',
    PASSWORD:'admin',
    DB:'articles',
    dialect:'postgres',
    PORT:5432,
    pool:{
        max:500,
        min:0,
    },
}