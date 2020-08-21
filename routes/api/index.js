const router = require("express").Router();
const bookRoutes = require("./books");

// References book routes
router.use("/books", bookRoutes);

module.exports = router;
