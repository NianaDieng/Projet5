const router = require("express").Router();
const Articlemodel = require("../config/Articlemodel");
router
  .get("/articles", (req, res) => {
    res.render("composeBlog");
  })
  .post("/articles", (req, res) => {
    const { title, author,resume,contenu } = req.body;
    // Rechercher les champs manquants
    if (!title || !author || !resume || !contenu)
      return res.send("Please enter all the required credentials!");
    const newBlog = new Articlemodel({ title, author,resume,contenu });
    // enregister le blog dans la base de donnees
    newBlog
      .save()
      .then(() => {
        console.log("Blog Saved Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });
module.exports = router;