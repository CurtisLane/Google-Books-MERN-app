const db = require("../models/book");
const axios = require('axios')
require('dotenv').config()

// Defining methods for the booksController
module.exports = {
  findByTitle: function(req, res) {
    let query = req.params.title
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`)
      .then(results => {
        res.json(results.data.items)
      })
  }
};
