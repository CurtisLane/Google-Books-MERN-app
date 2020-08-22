const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleAPI");

// References book routes
router.use("/books", bookRoutes);
router.use('/google', googleRoutes)

module.exports = router;
