const router = require("express").Router();
const musicRoutes = require("./books");

// Book routes
router.use("/music", musicRoutes);

module.exports = router;
