import axios from "axios";
require('dotenv').config()




export default {
  // Google Books API Search
  getSearch: function(query){
    // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${process.env.REACT_APP_API_KEY}`) //console.log(process.env)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
