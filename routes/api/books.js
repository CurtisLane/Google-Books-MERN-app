const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Get and Post for "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Get Put and Delete for "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
