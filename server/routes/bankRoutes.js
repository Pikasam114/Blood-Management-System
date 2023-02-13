const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM blood_bank;", (error, result) => {
    // if error occurs while running query
    if (error) return res.status(500).json({ message: "Error running query!" });
    // if result is an empty array
    if (!result.length)
      return res.status(404).json({ message: "No data found!" });
    return res.send(result);
  });
});

module.exports = router;
