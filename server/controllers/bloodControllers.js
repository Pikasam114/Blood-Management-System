const db = require("../db");

function getAllBloods(req, res) {
  db.query("SELECT * FROM blood;", (error, result) => {
    if (error) return res.json({ message: error });
    if (!result.length)
      return res.status(404).json({ message: "No data found!" });
    res.send(result);
  });
}

function getDetailsByBloodType(req, res) {
  const type = req.params.type;
  db.query(
    "select * from blood join blood_bank join inventory WHERE blood.blood_id = inventory.blood_id && blood_bank.bank_id = inventory.bank_id && blood.type = ?",
    type,
    (error, result) => {
      if (error) return res.status(500).json({ message: error });
      if (!result.length) return res.status(404).json({ message: error });
      res.send(result);
    }
  );
}
module.exports = { getAllBloods, getDetailsByBloodType };
