const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello you requested /api/inventory");
});

module.exports = router;
