const mongoose = require('mongoose');

const articlemodels = mongoose.Schema(
   {
      title: { type: String, required: true },
      author: { type: String, required: true },
      resume: { type: String, required: true },
      contenu: { type: String, required: true },
      dateSortie: {
         type:Date, default:Date.now
      },
      dateUpdate: {
         type:Date, default:Date.now
      }
   },
);

module.exports = mongoose.model('Articlemodel',articlemodels )